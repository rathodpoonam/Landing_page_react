import React from 'react'

const CircleRotate = () => {
    return (
        < >
            <div className=" container relative flex items-center justify-center  ">
                {/* Outer Circle */}
                <div className="absolute w-96 h-96 rounded-full border-2 border-gray animate-rotate-clockwise ">
                    <div className="absolute inset-0 flex items-center justify-center   ">
                    </div>
                    <div className="absolute  -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-300 rounded-full">
                        <img src="figma.png" alt="Outer Circle" className="w-full h-full object-cover " />
                    </div>

                </div>
                <div className="absolute w-96 h-96   animate-rotate-counterclockwise ">
                    <div className="absolute inset-0 flex items-center justify-center   ">
                    </div>
                    <div className="absolute  top-48 left-1 transform -translate-x-1/2 w-10 h-10 bg-slate-300 rounded-full">
                        <img src="flutter.png" alt="Outer Circle" className="w-full h-full object-contain " />
                    </div>

                </div>
                <div className="absolute w-96 h-96   animate-rotate-counterclockwise border-gray  ">
                    <div className="absolute inset-0 flex items-center justify-center   ">
                    </div>
                    <div className="absolute  -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-300  rounded-full">
                        <img src="android.png" alt="Outer Circle" className="w-full h-full object-contain " />
                    </div>

                </div>
                {/* Inner Circle */}

                <div className="absolute w-64 h-64 rounded-full border-2 border-gray animate-rotate-clockwise">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-slate-300">
                            <img src="shopify.png" alt="Inner Circle" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                <div className="absolute w-36 h-36 rounded-full border-2 border-gray animate-rotate-counterclockwise">

                    <div className="absolute top-2 -left-3 transform -translate-x-16 w-10 h-10 rounded-full bg-slate-300">
                        <img src="python.png" alt="Inner Circle" className="w-full h-full object-contain" />
                    </div>

                </div>




                <div className="absolute w-16 h-16 rounded-full border-2 border-none ">
                    <img src="wordpress.png" alt="" />
                </div>



            {/* circles /dots */}
            <div className="absolute w-36 h-36 rounded-full   ">

                <div className="absolute top-2 -left-3 transform -translate-x-16 w-10 h-10 rounded-full bg-orange-400 bg-opacity-15">
                    
                </div>
                <div className="absolute top-2 -left-3 transform translate-x-32 w-10 h-10 rounded-full bg-teal-400 bg-opacity-15">
                 
                </div>

                <div className="absolute top-2 -left-3 transform translate-x-1/4 w-2 h-2 rounded-full bg-orange-400 ">
                   
                </div>
                <div className="absolute top-40 -left-3 transform translate-x-12 w-2 h-2 rounded-full bg-teal-400 ">
                    
                </div>


                <div className="absolute top-40 -left-28 transform translate-x-12 w-2 h-2 rounded-full bg-pink-600 ">
                   
                </div>
                <div className="absolute top-0 -left-28 transform translate-x-96 w-2 h-2 rounded-full bg-green-600 ">
                   
                </div>


                <div className="absolute -top-20 -left-56 transform translate-x-96 w-2 h-2 rounded-full bg-teal-400 ">
                   
                </div>
                <div className="absolute top-64 -left-56 transform translate-x-96 w-2 h-2 rounded-full bg-customYellow ">
                   
                </div>
                <div className="absolute top-40 left-1 transform translate-x-64 w-2 h-2 rounded-full bg-teal-400 ">
                   
                </div>
            </div>
         
{/* Rectangle/triangle  */}
           
            <div className="absolute w-36 h-36 rounded-full   ">

                <div className="absolute top-0 -left-10 transform translate-x-64 w-2 h-2 border-2  border-teal-400 ">
                 
                </div>
                <div className="absolute top-40 -left-10 transform translate-x-64 w-2 h-2 border-2  border-customYellow ">
                
                </div>
                <div className="absolute top-24 -left-72 transform translate-x-64 w-2 h-2 border-2  border-pink-600 ">
                  
                </div>
            </div>
            </div>
           
            
        </>

    )
}

export default CircleRotate
