import React from 'react'
import CircleRotate from './CircleRotate'
import SetUp from './SetUp'


const Attributes = () => {
  return (
    <>
      <div className="attributes p-20 ">

        <div className="container flex flex-col items-center justify-center  pt-2  text-center ">
          <p className='tetx-xl md:text-3xl font-extrabold ' >Our Attributes</p>
          <div className="w-20 md:w-24 h-1 bg-customYellow rounded-md mt-3 "></div>

        </div>


        <div className="container flex mt-14   ">
          <div className="flex-1   md:p-4 text-white flex  items-center justify-center flex-col">


            <CircleRotate />

          </div>

          <div className="container flex-1 flex md:flex-col w-32 justify-center    ">

            <p className='md:text-xl tetx-sm font-bold ' >Oversee everything from a single workplace.</p>
            <div className="w-24 h-1 bg-customYellow rounded-md mt-3 "></div>

            <p className='md:text-sm text-xs pt-16 md:leading-6'>
              Our goal at Codestrup Infotech is to empower young people, especially students, by promoting self-awareness and exploring uncharted territory in high-growth fields like technology. Our commitment lies on assisting students in realising their dreams by filling the knowledge gap between them and the industrial world. We Are Open To Connecting With New People On This Path Of Endless Joy
              And Perpetual Learning.
            </p>

          </div>
        </div>

      </div>
      <SetUp/>
    </>
  )
}

export default Attributes
