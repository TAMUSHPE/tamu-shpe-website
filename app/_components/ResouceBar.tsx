import Image from 'next/image';




export default function ResourceBar() {
    return (
        <div className="bg-[#191740] w-full h-60 flex flex-row p-2 gap-2 rounded-md mt-5"> 

            {/* first box */}
            <div className="bg-white/20 flex-1 p-2 outline outline-white/10 backdrop-blur-md rounded-3xl transition-all duration-500 ease-in-out hover:flex-[3] group">
                <div className="bg-gray-950 w-full h-full rounded-2xl text-white overflow-hidden relative">
                    <Image 
                        src="/our_gallery.jpg"
                        alt="Our gallery photo"
                        fill
                        className="object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                </div>
            </div>

            {/* second box */}
            <div className="bg-white/20 flex-1 p-2 outline outline-white/10 backdrop-blur-md rounded-3xl transition-all duration-500 ease-in-out hover:flex-[3] group">
                <div className="bg-gray-950 w-full h-full rounded-2xl text-white overflow-hidden relative">
                    <Image 
                        src="/our_gallery.jpg"
                        alt="Our gallery photo"
                        fill
                        className="object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                </div>
            </div>

            {/* third box */}
            <div className="bg-white/20 flex-1 p-2 outline outline-white/10 backdrop-blur-md rounded-3xl transition-all duration-500 ease-in-out hover:flex-[3] group">
                <div className="bg-gray-950 w-full h-full rounded-2xl text-white overflow-hidden relative">
                    <Image 
                        src="/our_gallery.jpg"
                        alt="Our gallery photo"
                        fill
                        className="object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                </div>
            </div>
        </div>
    )
}