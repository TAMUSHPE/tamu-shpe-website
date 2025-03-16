import { db } from '../_config/firebaseConfig';
import { collection, orderBy, getDocs, query, limit } from 'firebase/firestore';

export interface PublicUserInfo {
  // Firestore parameters
  uid?: string
  email?: string;
  displayName?: string;
  photoURL?: string;
  name?: string;
  bio?: string;
  major?: string;
  classYear?: string;
  pointsRank?: number;
  points?: number;
  pointsThisMonth?: number;
  isStudent?: boolean;
};

export const getSortedUserData = async (): Promise<{ data: PublicUserInfo[] }> => {
  try {
    const userRef = collection(db, 'users');
    const sortedUsersQuery = query(userRef, orderBy("points", "desc"), limit(5));
    const data = (await getDocs(sortedUsersQuery)).docs;

    return {
      data: data.map((value) => {
        const userData = value.data() as PublicUserInfo;
        return { ...userData, uid: value.id };
      }),
    };
  } catch (error) {
    console.error('Error fetching sorted user data:', error);
    throw new Error('Failed to fetch sorted user data');
  }
}