import FlickrCarouselClient from './FlickrCarouselClient';
import fetchPhotos from '../api/flickrUtils';

export default async function FlickrCarousel() {
  const photos = await fetchPhotos('72177720316068498');

  return <FlickrCarouselClient photos={photos} />;
}
