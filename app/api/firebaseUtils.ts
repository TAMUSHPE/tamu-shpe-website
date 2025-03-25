import { db } from '../_config/firebaseConfig';
import { collection, orderBy, getDocs, query, limit } from 'firebase/firestore';

export interface PublicUserInfo {
  // Firestore parameters
  uid?: string
  displayName?: string;
  name?: string;
  pointsRank?: number;
  points?: number;
  pointsByMonth?: {[key: string]: number;}
};

export const getSortedUserData = async (): Promise<PublicUserInfo[]> => {
  try {
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth();

    let startYear = currYear;
    let endYear = currYear + 1;

    if (currMonth < 7){
      startYear = currYear - 1;
      endYear = currYear;
    }

    const startSchool = new Date(startYear, 7, 1);
    const endSchool = new Date(endYear, 4, 31);

    const userRef = collection(db, 'users');
    const sortedUsersQuery = query(userRef, orderBy('points', 'desc'), limit(80));
    const sortedData = (await getDocs(sortedUsersQuery)).docs;
    const users = await Promise.all(
      sortedData.map(async (value) => {
        const userData = value.data() as PublicUserInfo;
        const pointsByMonth = { 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
        const eventLogsRef = collection(value.ref, 'event-logs');
        const eventLogsSnapshot = await getDocs(eventLogsRef);

        if (!eventLogsSnapshot.empty){
          for (const doc of eventLogsSnapshot.docs) {
            const logData = doc.data();

            if (logData.signInTime && logData.points && logData.signInTime.toDate() >= startSchool && logData.signInTime.toDate() <= endSchool) {
              const month = (logData.signInTime.toDate().getMonth() + 1) as keyof typeof pointsByMonth;
              if(month === 4){
                console.log(logData);
              }
              pointsByMonth[month] = (pointsByMonth[month] || 0) + logData.points;
            }
            else if (logData.instagramLogs){
              for(const time of logData.instagramLogs){
                if (time.toDate() >= startSchool && time.toDate() <= endSchool){
                  const month = (time.toDate().getMonth() + 1) as keyof typeof pointsByMonth;
                  pointsByMonth[month] = (pointsByMonth[month] || 0) + 1;
                }
              }
            }
          }
        }

        return { ...userData, pointsByMonth };
      })
    );

    return users;

  } catch (error) {
    console.error('Error fetching sorted user data:', error);
    throw new Error('Failed to fetch sorted user data');
  }
}