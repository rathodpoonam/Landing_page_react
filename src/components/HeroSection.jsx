import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <>
        <div>
<Navbar/>
        </div>
            <div className="content  w-full md:w-auto">
                <div className="diagonal">
        
                    <img src="hero.png" alt=""  className='md:w-96 md:h-96 h-52 w-h-52'/>
                </div>
                    <img src="Group 123.png" alt="" className='img-1 md:w-72 md:h-96 w-32 h-60 mt-32 ' />
                <div className="text w-96 py-4 md:py-6 ">
                    <button className='md:pr-7 p-2 md:text-lg bg-white rounded text-[10px] '>👋Welcome to Codestrup</button>
                    <p className='text-white text-lg md:text-4xl font-extrabold py-6 '>Take Your Career to the Next Level </p>
                    <div className="md:w-20 w-10 h-2 bg-bluecyan rounded-md mt-0 md:mt-3 " ></div>
                    <p className='text-white text-base md:text-xl  py-6'>Join Our Exciting Internship Journey </p>
                    <button className='mt-8 text-[10px] md:text-xl font-semibold'><Link to={"/internship"} className='bg-customYellow p-2 md:p-3  md:px-6 rounded-md  '>Get Started</Link></button>


                </div>
            </div>
        </>
    )
}

export default HeroSection
