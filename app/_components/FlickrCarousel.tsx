import Image from 'next/image';

interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
}

export default async function FlickrCarousel() {
  const flickerApiKey = process.env.FLICKER_API_KEY;
  const flickerUserId = process.env.FLICKER_USER_ID;
  const flickrPhotoSetId = '72177720316068498';

  let photos: (FlickrPhoto | null)[] = [];

  const fetchPhotos = async () => {
    try {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickerApiKey}&user_id=${flickerUserId}&photoset_id=${flickrPhotoSetId}&format=json&nojsoncallback=1`;

      const response = await fetch(url);
      const json = await response.json();
      if (json && json.photoset && json.photoset.photo.length > 0) {
        // const shuffledPhotos = shufflePhotos(json.photoset.photo);
        photos = [json.photoset.photo[json.photoset.photo.length - 1], ...json.photoset.photo, json.photoset.photo[0]];
      } else {
        photos.push(null);
      }

    } catch {
      photos.push(null);
    }
  };

  await fetchPhotos();

  function FlickrPhoto({ photo }: { photo: FlickrPhoto }) {
    const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;

    return (
      <Image
        src={photoUrl}
        alt="Flickr Photo"
        width={5000}
        height={5000}
        className="w-full h-full object-cover"
        quality={100}
      />
    );
  }

  return (
    <div className="h-64 w-full bg-[#cceaff] lg:col-span-6 content-center">
      <div className="flex flex-row justify-between h-[90%] w-full">
        <div className="bg-red-500 w-52 h-full"></div>
        <div className="bg-blue-500 w-5/6 h-full">
          <FlickrPhoto photo={photos[2]!} />
        </div>
        <div className="bg-green-500 w-52 h-full"></div>
      </div>
    </div>
  );
}
