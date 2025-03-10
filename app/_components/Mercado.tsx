import * as cheerio from 'cheerio';
import MercadoClient from './MercadoClient';

interface MercadoItem {
  title: string;
  price: number;
  image: string;
  link: string;
}

export const revalidate = 604800; // 7 days (604800 seconds)

async function fetchFlywireItems(): Promise<MercadoItem[]> {
  const res = await fetch('https://tamu.estore.flywire.com/products?storeCatalog=5935');
  const html = await res.text();
  const $ = cheerio.load(html);

  const items: MercadoItem[] = [];
  $('.card-product').each((index: number, item: cheerio.Element) => {
    items.push({
      title: $(item).find('.product-title').text(),
      price: parseFloat($(item).find('.price').text().replace('$', '')),
      image: 'https://tamu.estore.flywire.com' + $(item).find('.card-image').find('img').attr('src') || '/gm.svg',
      link: 'https://tamu.estore.flywire.com' + $(item).find('a').attr('href') || '/',
    });
  });
  return items;
}

export default async function Mercado() {
  const items = await fetchFlywireItems();

  return <MercadoClient items={items} />;
}
