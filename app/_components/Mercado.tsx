import * as cheerio from "cheerio";
import MercadoClient from "./MercadoClient";

interface MercadoItem {
  title: string;
  price: number;
  image: string;
  link: string;
}

export const revalidate = 604800; // 7 days

async function fetchFlywireItems(): Promise<MercadoItem[]> {
  const res = await fetch(
    "https://sofctamu.estore.flywire.com/products?storeCatalog=23327",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Mercado data. Status: " + res.status);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const items: MercadoItem[] = [];

  $(".card-product").each((index: number, item: cheerio.Element) => {
    const title = $(item).find(".product-title").text().trim();
    const priceText = $(item).find(".price").text().trim().replace("$", "");
    const imgSrc = $(item).find(".card-image img").attr("src");
    const href = $(item).find("a").attr("href");

    items.push({
      title: title || "Untitled Item",
      price: parseFloat(priceText) || 0,
      image: imgSrc
        ? `https://sofctamu.estore.flywire.com${imgSrc}`
        : "/gm.svg",
      link: href ? `https://sofctamu.estore.flywire.com${href}` : "/",
    });
  });

  return items;
}

export default async function Mercado() {
  const items = await fetchFlywireItems();
  return <MercadoClient items={items} />;
}
