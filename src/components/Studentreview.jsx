import React from 'react'
import { useState } from 'react';




const Studentreview = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const goToCard = (index) => {
        setCurrentCardIndex(index);
    };


    return (
        <>
        <div className='container'>

        

            <div className="container flex flex-col items-center justify-center h-auto pt-6  text-center ">
                <p className='text-xl md:text-3xl font-extrabold ' >Student Review</p>
                <div className="w-24 h-1 bg-customYellow rounded-md mt-3 "></div>
           </div>


            {/* Carousel */}

            <div className='contain-inline-size m-10 md:m-14 md:p-11 flex flex-row'>
                <div className=''>
                    <img src="image1.png" alt="" className='card1' />
                </div>
                <div className=''>
                    <img src="image1.png" alt=""  className='card2' />
                </div>
                <div className=''>
                    <img src="image1.png" alt=""  className='card3' />
                </div>
            </div>
            <div className="dot flex flex-row gap-2 md:gap-5 items-center justify-center ">
                <div  className='md:w-3 md:h-3 w-1 h-1 rounded-3xl bg-gray  hover:bg-customYellow '></div>
                <div className='md:w-3 md:h-3 w-1 h-1 rounded-3xl bg-gray hover:bg-customYellow'></div>
                <div className='md:w-3 md:h-3 w-1 h-1 rounded-3xl bg-gray hover:bg-customYellow'></div>
            </div>
            </div>

        </>
    )
}

export default Studentreview
