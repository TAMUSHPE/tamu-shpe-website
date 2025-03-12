export default function Involvement() {
  return (
    <div className="h-full overflow-auto">
      <main className="px-4 md:px-10 h-full flex flex-col gap-10">
        <div className="bg-[#500000] w-full h-[50vh]"></div>
        <div className="bg-red-500 w-full h-[45vh]"></div>
        <div className="bg-[#500000] w-full h-[13vh] p-4 flex-1">
          <h1 className="text-white font-bold text-[28px]">
            Why points?
          </h1>
          <p className="text-white font-semibold text-[20px] pl-2.5">
            Members who are top point earners can be eligible for sponsorship to future SHPE National Conventions
            and have the opportunity to win various awards at the End of Year Banquet!
          </p>
        </div>
        <div className="bg-green-500 w-full  flex justify-between">
          <div className="flex flex-col bg-[#191740] p-3  justify-evenly  w-1/3 rounded-3xl ">
            <div className="flex items-center justify-around">
              <img src="shpeicon.svg"></img>
              <p className=" text-white  text-[28px] font-semibold ">
                Download the 
                <br></br>
                  <strong className="text-orange-500">TAMU SHPE</strong>
                  <br></br>
                Mobile App!
              </p>
            </div>
            <div className="text-white self-center">
              Now on IOS and Android!
            </div>
          </div>
          <div className=" flex flex-col border-black border-2 p-4 text-[#3C0000]">
            <div className=" self-center font-bold text-2xl">
              Gaining points
            </div>
            <div className="grid grid-cols-2 gap-y-2  font-semibold ">
                <div className="w-fit" >General Meeting & Events - 1 pt</div>
                <div className="w-fit" >Academic Socials - 1 pt</div>
                <div className="w-fit" >General Meeting Sign Out - 2 pts</div>
                <div className="w-fit" >Community Service - 2 pts/hour </div>
                <div className="w-fit" >Elections - 4 pts</div>
                <div className="w-fit" >Upload old exam - 1 pt + 1 pt if A</div>
                <div className="w-fit" >Professional Workshops - 3 pts</div>
                <div className="w-fit" >Post your #wearitwednesday on Social Media - 1 pt</div>
                <div className="w-fit" >Academic Workshops - 2 pts</div>
                <div className="w-fit" >MemberSHPE Challenge - 1 pt</div>
            </div>
          </div>

        </div>
        <div className="bg-purple-500 w-full h-[50vh]"></div>
      </main>
    </div>
  );
}
