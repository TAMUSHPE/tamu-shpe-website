export default function About() {
  return (
    <div className="h-full overflow-auto">
      <main className="pb-5 container pt-5 mx-auto px-4 md:px-10 grid grid-cols-1 gap-8">
        {/* Chapter Focus */}
        <div className="grid items-center place-items-center gap-4 md:gap-0 md:grid-cols-12">
          <div className="h-64 w-full bg-blue-400 md:col-span-7"></div>
          <div className="h-72 w-full bg-purple-400 md:col-span-4 md:col-start-9"></div>
        </div>

        {/* National Focus */}
        <div className="grid items-center place-items-center gap-4 md:gap-0 md:grid-cols-12">
          <div className="h-72 w-full bg-purple-400 md:col-span-4"></div>
          <div className="h-64 w-full bg-blue-400 md:col-span-7 md:col-start-6"></div>
        </div>

        {/* History */}
        <div className="h-72 bg-blue-800 w-full"></div>

        {/* Executive Board Cards */}
        <div className="h-72 bg-red-500 w-full"></div>
      </main>
    </div>
  );
}
