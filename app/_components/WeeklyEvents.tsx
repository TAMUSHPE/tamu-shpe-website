import fetchPhotos from '../_api/flickrUtils';
import WeeklyEventsClient from './WeeklyEventsClient';

export default async function WeeklyEvents() {
  const photos = await fetchPhotos('72177720316068498');

  return (
    <WeeklyEventsClient photos={photos}/>
  );
}
