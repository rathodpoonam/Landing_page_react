import React from 'react'

const About = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-between h-auto  items-center ">
        <div className="flex-1 p-4 text-white  md:text-left text-center  justify-center items-center">
          <div className="md:w-14 md:h-2 w-28 h-1 bg-customYellow rounded-md mt-3 "></div>
          <p className="font-bold text-sm md:text-xl text-gray mt-3">WE ARE EXPERT</p>
        </div>
        <div className="container flex flex-wrap flex-1 pt-1 md:pt-3 mt-2  md:mt-5  justify-center md:justify-end">
          <img src="wordpress.png" className="md:w-14 w-10 h-10 md:h-14 m-1" alt="" />
          <img src="python.png" className="md:w-14 w-10 h-10 md:h-14" alt="" />
          <img src="figma.png" className="md:w-14 w-10 h-10 md:h-14" alt="" />
          <img src="shopify.png" className="md:w-14 w-10 h-10 md:h-14" alt="" />
          <img src="android.png" className="md:w-14 w-10 h-10 md:h-14" alt="" />
          <img src="flutter.png" className="md:w-14 w-10 h-10 md:h-14" alt="" />
        </div>
      </div>



      <div className="about">

        <div className="container flex flex-col items-center justify-center h-auto pt-6  text-center ">
          <p className=' text-xl md:text-3xl font-extrabold ' >About Us</p>
          <div className="w-20 h-1 bg-customYellow rounded-md mt-3 "></div>

        </div>


        <div className="container flex  h-auto  mt-14  m-5 ">
          <div className="flex-1 p-4 text-white flex  items-center justify-center flex-col">

            <img src="Student (1).png" alt="" />
            <img src="Student shadow.png" className='pt-6' alt="" />
          </div>

          <div className="container flex-1 flex flex-col justify-center items-center  text-center ">
            <p className='text-xs md:text-sm md:leading-6'>
              We Develop Personalized Software At Our Company, We Turn The Digital Dreams Of Our Clients Into A Reality. Throughout the whole development process, we maintain constant alignment with the end goal by closely collaborating with our users. We Are Committed To Producing Exceptional
              Software For Each Of Our Clients.
            </p>
            <p className=' text-xs md:text-sm pt-3 md:pt-16 md:leading-6'>
              Our goal at Codestrup Infotech is to empower young people, especially students, by promoting self-awareness and exploring uncharted territory in high-growth fields like technology. Our commitment lies on assisting students in realising their dreams by filling the knowledge gap between them and the industrial world. We Are Open To Connecting With New People On This Path Of Endless Joy
              And Perpetual Learning.
            </p>

          </div>
        </div>

      </div>



    </>
  )
}

export default About
