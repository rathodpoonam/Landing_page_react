import React from 'react'
import { Link } from 'react-router-dom'
import Timeline from './Timeline'

const Internship = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-auto pt-6  text-center ">
        <p className=' text-xl md:text-3xl font-extrabold ' >Internship</p>
        <div className="w-20 md:w-24 h-1 bg-customYellow rounded-md mt-2 "></div>
      </div>

      <div className='mt-1 flex flex-col md:flex-row justify-center items-center  '>
        {/* card 1 */}
        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform   hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 md:p-8 flex items-center '>

            <img className="pt-8   object-cover" src="webdev.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base    md:text-2xl text-black text-center ">Web Development</div>
            <p className="text-gray-700  text-center text-[8px] md:text-[10px] p-3">Join us for a hands-on web development internship. Collaborate with experienced developers, enhance skills in HTML, CSS, JavaScript, and frameworks like React. Gain real-world experience, mentorship, and potential employment opportunities. Apply with resume and cover letter. Don't miss this chance to kickstart your web development career!</p>
          </div>
          <div className="  flex justify-center items-center ">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs ">  Apply Now</a>
          </div>
        </div>

        {/* card 2 */}
        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform    hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 flex justify-center items-center '>

            <img className="pt-8 object-cover" src="wordpress.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base   md:text-2xl text-center">Wordpress Development</div>
            <p className="text-gray-700  text-center text-[10px] p-3">Gain hands-on experience in WordPress development through our intensive internship program. Learn essential skills in theme and plugin development, customization, and troubleshooting. Work closely with experienced developers on real-world projects, and build a strong foundation for a career in web development. Apply now for an exciting opportunity to expand your skills!</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs">  Apply Now</a>
          </div>
        </div>

        {/* card 3 */}
        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform         hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 flex justify-center   items-center  '>

            <img className="pt-8  object-cover" src="figma.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base   md:text-2xl text-center">Figma Designing</div>
            <p className="text-gray-700  text-center text-[10px] p-3">Join our Figma design internship for hands-on experience in creating intuitive user interfaces. Collaborate with a dynamic team, learn industry best practices, and contribute to real-world projects. Gain valuable insights into UX/UI design while refining your skills in a supportive environment. Apply now for a transformative learning opportunity.</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs">  Apply Now</a>
          </div>
        </div>
      </div>


      {/* section card 2 */}
      <div className=' flex flex-col md:flex-row justify-center items-center  '>
        {/* card 4 */}

        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform    hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 flex justify-center items-center '>

            <img className="pt-8 object-cover" src="python.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base   md:text-2xl text-center">Python Development</div>
            <p className="text-gray-700  text-center text-[10px] p-3">Join our dynamic Python development internship program! Gain hands-on experience in Python programming, web development, and software engineering. Collaborate with our team to build innovative solutions and enhance your skills in a supportive environment. Apply now for an exciting opportunity to kickstart your career in technology!</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs">  Apply Now</a>
          </div>
        </div>
     

        {/* card 5 */}
        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform    hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 flex justify-center items-center '>

            <img className="pt-8 object-cover" src="android.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base   md:text-2xl text-center">Android Development</div>
            <p className="text-gray-700  text-center text-[10px] p-3">Join our dynamic Android development internship program! Gain hands-on experience in building innovative Android apps while working closely with our experienced team. Develop your skills in Java/Kotlin, UI/UX design, and API integration. Unlock opportunities to contribute to real-world projects and accelerate your career in mobile app development. Apply now!</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs ">  Apply Now</a>
          </div>
        </div>
     

        {/* card 6 */}


        <div className="max-w-xs rounded-lg overflow-hidden   transition-transform transform    hover:-translate-y-2 m-4  p-4  shadow-custom-right-bottom  ">
          <div className='w-auto h-28 m-1 p-8 flex justify-center items-center '>

            <img className="pt-8 object-cover" src="flutter.png" alt="Card Image" />

          </div>
          <div className=" py-0 pt-10  ">
            <div className="font-bold text-base   md:text-2xl text-center">Flutter Development</div>
            <p className="text-gray-700  text-center text-[10px] p-3">Join our exciting Flutter development internship program! Gain hands-on experience in building cross-platform mobile applications using Flutter framework. Work closely with experienced developers, learn best practices, and contribute to real-world projects. Kickstart your career in mobile app development with us! Apply now for an enriching learning journey.</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="block bg-apply text-white px-7 py-1  text-center
            rounded-lg hover:bg-customYellow transition-colors md:text-base text-xs ">  Apply Now</a>
          </div>
        </div>
      
      </div>

<Timeline/>
    </>
  )
}

export default Internship
