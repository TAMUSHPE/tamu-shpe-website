import fetchPhotos from '../api/flickrUtils';
import WeeklyEventsClient from './WeeklyEventsClient';

export default async function WeeklyEvents() {
  const photos = await fetchPhotos('72177720324382195');

  return <WeeklyEventsClient photos={photos} />;
}
