import React from 'react'

const Support = () => {
    return (
        <div>
            <div className=" flex flex-col  h-auto    m-5 bg-section_gray items-center justify-center text-center">
                <h5 className='text-customYellow font-bold text-[8px] md:text-lg '>Support</h5>
                <p className='font-bold text-[10px] md:text-xl '>Subscribe Newsletter & get</p>
                <p className='font-normal text-[8px] md:text-xs '>Company name</p>


                <div className='container flex flex-row items-center justify-center  w-auto md:p-1  px-8 rounded-xl m-4 bg-white'>
                    <img src="email.gif" className='md:w-7 md:h-7 w-4 h-4 flex justify-center' alt="" />
                    <input type="email" placeholder='Your Email' className='px-2 md:px-8 py-1 text-[10px] ' /><button className='bg-apply py-1 px-6 md:py-2 md:px-3 rounded-xl flex flex-row  m-1 text-white text-[8px] md:text-xs' type='submit'>Subscribe<img className='md:w-4 md:h-4 w-3 h-3' src="send.png" alt="" /></button>


                </div>
            </div>

        </div>
    )
}

export default Support
