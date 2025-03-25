import { PublicUserInfo } from '../api/firebaseUtils';

async function getUsers(): Promise<PublicUserInfo[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/firebaseRoute`, {
      cache: 'force-cache',
      next: { revalidate: 604800 },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch leaderboard data. Status: ' + res.status);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return [];
  }
}

export default async function PointsTable() {
  const headers = ['Rank', 'Name', 'Total Points', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  const users = await getUsers();

  return (
    <div className="flex flex-col h-[70vh] w-full col-span-8 md:col-span-6 gap-5">
      <h1 className="text-3xl">Points Leaderboard</h1>
      <div className="relative flex flex-col w-full h-full text-center overflow-auto">
        <div className="sticky top-0 grid grid-cols-12 shrink-0 items-center h-14 bg-[#500000] text-white min-w-[900px]">
          {headers.map((header, index) => (
            <h2 key={`header-${index}`} className="flex justify-center">
              {header}
            </h2>
          ))}
        </div>

        {users.map((user, index) => (
          <div
            key={`user-${index}`}
            className="grid grid-cols-12 shrink-0 items-center h-14 bg-[#F1F1F1] text-black border-black border-b-2 min-w-[900px]"
          >
            <h2 className="flex justify-center">{user.pointsRank}</h2>
            <h2 className="flex justify-center">{user.name}</h2>
            <h2 className="flex justify-center">{user.points?.toFixed(1)}</h2>
            {[8, 9, 10, 11, 12, 1, 2, 3, 4].map((month, index) => (
              <h2 key={`points-${user.uid}-${index}`} className="flex justify-center">
                {user.pointsByMonth?.[month]?.toFixed(1) ?? 0}
              </h2>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
