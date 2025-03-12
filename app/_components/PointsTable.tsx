async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/firebaseRoute`, {
    next: { revalidate: 15 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  return res.json();
}

export default async function PointsTable() {
  const headers = ['Rank', 'Name', 'Total Points', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const user = ['1', 'Axel Fontaine', '232', '12', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

  const users = await getUsers();
  console.log(users[0]);

  return (
    <div className="flex flex-col h-[70vh] w-full col-span-8 md:col-span-6 gap-5">
      <h1 className="text-3xl">Points Leaderboard</h1>
      <div className="flex flex-col bg-red-500 w-full h-full text-center">
        <div className="grid grid-cols-12 items-center h-14 bg-[#500000] text-white">
          {headers.map((header, index) => (
            <h2 key={`header-${index}`} className="flex justify-center">
              {header}
            </h2>
          ))}
        </div>

        <div className="grid grid-cols-12 items-center h-14 bg-[#F1F1F1] text-black border-black border-b-2">
          {user.map((user, index) => (
            <h2 key={`user-${index}`} className="flex justify-center">
              {user}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
