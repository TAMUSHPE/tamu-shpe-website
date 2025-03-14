export default function Involvement() {
  return (
    <div className="h-full overflow-auto">
      <main className="px-4 md:px-10 h-full flex flex-col gap-10">
        <div className="bg-[#500000] w-full h-[50vh]"></div>
        {/* Steps for MemberSHPE */}
        <div className="bg-[#66AAE0] w-full p-5 flex flex-col">
          <h1 className="text-2xl text-left font-extrabold"> Steps for Membership </h1>
          <h2 className="text-l text-gray-600 text-left"> To earn <b>points</b> you must be a registered national and chapter member! </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* National Registration Steps */}
            <div className="bg-[#BADEFF] w-full h-full md:col-span-1 text-left p-3 flex flex-col gap-2"> 
             <h1 className="text-md text-left font-extrabold"> SHPE National Registration </h1>
             <ul className="list-none list-inside text-left text-sm pl-8">
               <li className="-indent-4"> 1. Go to the <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap"> 
                <a href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe">SHPE Registration</a> 
                </span> site. 
               </li>
               <li className="-indent-4"> 2. Go to Join/Renew Membership, make sure to select Region 5 and Texas A&M University as your chapter. </li>
               <li className="-indent-4"> 3. Fill out your Account Information and make sure that the Educational Information given to you is correct. </li>
               <li className="-indent-4"> 4. Agree to the Code of Ethics and add the Membership to your cart. </li>
               <li className="-indent-4"> 5. Pay for the membership. </li>
             </ul>
             <h1 className="text-l font-extrabold text-center"> SCREENSHOT PAYMENT CONFIRMATION FOR CHAPTER REGISTRATION </h1>
            </div>
            <div className="flex flex-col gap-14">
              {/* Chapter Registration Steps */}
              <div className="bg-[#BADEFF] w-full max-h-min md:col-span-1 text-left p-3 gap-2" > 
              <h1 className="text-md text-left font-extrabold"> TAMU Chapter Registration </h1>
              <ul className="list-none list-inside text-left text-sm pl-8">
                <li className="-indent-4"> 1. Pay $20 to cover your #TAMUSHPE <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap"> 
                  <a href="https://tamu.estore.flywire.com/products/2024-2025-membershpe-shirt-247722">T-shirt</a> 
                  </span>. </li>
                <li className="-indent-4"> 2. <b>Screenshot</b> payment confirmation. </li>
                <li className="-indent-4"> 3. Fill out our <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap"> 
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScMfQgPIBcOUDLojyf1ytRAUDxqipHNw2ZYNt0ori33Rl3Qzw/viewform">Google Form</a> 
                  </span> <b>Use non-tamu email to access form.</b> 
                </li>
              </ul>
              </div>
              {/* Congratulations */}
              <div className="bg-[#D23F26] w-full max-h-min text-center text gap-2 p-2" > 
                <h1 className="text-xl font-bold text-white">Congratulations!</h1>
                <h3 className="text-sm text-white">You are an official TAMU SHPE Member!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 w-full h-[13vh]"></div>
        <div className="bg-green-500 w-full h-[30vh]"></div>
        <div className="bg-purple-500 w-full h-[50vh]"></div>
      </main>
    </div>
  );
}
