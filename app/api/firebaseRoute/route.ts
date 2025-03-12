import { NextResponse } from 'next/server';
import { getSortedUserData } from '../firebaseUtils';

export const revalidate = 15; // 7 days (604800 in seconds)

export async function GET() {
  try {
    const { data } = await getSortedUserData();
    return NextResponse.json(data);

  } catch{
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard data' },
      { status: 500 }
    );
  }
}