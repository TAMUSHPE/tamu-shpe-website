export default function Sponsor() {
  return (
    <div className="h-full overflow-auto">
      <main>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Title Card */}
          <div className="bg-amber-600 h-[45vh] mr-24 md:mr-0 w-4/5 md:w-[55%] ease-in-out transition"></div>
          {/* Description Card */}
          <div className="bg-red-600 h-[55vh] w-4/5 md:w-2/5 mt-14 self-end"></div>
        </div>

        <div className="flex justify-around items-center flex-col md:flex-row my-10 gap-10">
          {/* Benefits Card */}
          <div className="bg-green-400 w-[90%] md:w-[40vw] h-[50vh]"></div>
          {/* Proposal Card */}
          <div className="bg-blue-800 w-[90%] md:w-[35vw] h-[40vh]"></div>
        </div>

        {/* How-To Card */}
        <div className="bg-teal-300 w-[90%] md:w-4/5 h-24 mx-auto"></div>
      </main>
    </div>
  );
}
