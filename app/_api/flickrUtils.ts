export interface FlickrPhoto {
  id: string;
  secret: string;
  server: string;
}

export default async function fetchPhotos(flickrPhotoSetId: string): Promise<FlickrPhoto[]> {
  const flickerApiKey = process.env.FLICKER_API_KEY;
  const flickerUserId = "143848472@N03";

  const photos: FlickrPhoto[] = [];

  try {
    const timestamp = new Date().getTime();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickerApiKey}&user_id=${flickerUserId}&photoset_id=${flickrPhotoSetId}&format=json&nojsoncallback=1&_=${timestamp}`;

    const response = await fetch(url, {cache: 'force-cache'});
    const json = await response.json();
    if (json && json.photoset && json.photoset.photo.length > 0) {
      photos.push(...json.photoset.photo);
    }
  } catch (error) {
    console.error('Error fetching photos:', error);
  }

  return photos;
}