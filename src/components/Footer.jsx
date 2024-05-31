import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='p-2'>

                <div className='container mx-auto p-4 md:mt-0'>
                    <div className='flex  md:flex-row justify-between'>


                        <div className='w-3/4 md:w-1/3  justify-between  items-center md:mt-0'>
                          
                                <img src="footerlogo.png" alt="" />
                                {/* <p className='text-[10px] text-center w-72 pt-10'>At Codestrup, we empower aspiring tech professionals through hands-on internships in web and app development, offering real-world experience and expert mentorship to advance their careers.</p> */}
                           
                        </div>
                        <div className='w-full md:w-1/3'>
                            <p className='font-bold md:text-xl text-[11px]'>Social Media</p>
                            <div className="md:w-16 h-1 w-8 bg-customYellow rounded-md mt-2 md:mt-3 "></div>
                            <div className="socialmedia flex flex-col mt-7 space-y-3">
                                <div className='flex items-center'>
                                    <img src="linkedin.png" alt="LinkedIn" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="https://www.linkedin.com" className='font-medium md:text-sm text-[8px]'>LinkedIn</a>
                                </div>
                                <div className='flex items-center'>
                                    <img src="facebook.png" alt="Facebook" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="https://www.facebook.com" className='font-medium md:text-sm text-[8px]'>Facebook</a>
                                </div>
                                <div className='flex items-center'>
                                    <img src="insta.png" alt="Instagram" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="https://www.instagram.com" className='font-medium md:text-sm text-[8px]'>Instagram</a>
                                </div>
                                <div className='flex items-center'>
                                    <img src="twitter.png" alt="Twitter" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="https://www.twitter.com" className='font-medium md:text-sm text-[8px]'>Twitter</a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-1/3  '>
                            <div className='p-0'>
                                <p className='font-bold md:text-xl text-[11px]'>Quick Links</p>
                                <div className="md:w-16 h-1 w-8 bg-customYellow rounded-md mt-2 md:mt-3 "></div>
                                <div className='flex flex-col py-7 space-y-3'>
                                    <a href="/" className='font-medium md:text-sm text-[8px] '>Home</a>
                                    <a href="/about" className='font-medium md:text-sm text-[8px] '>About Us</a>
                                    <a href="/attributes" className='font-medium md:text-sm text-[8px] '>Our Attributes</a>
                                    <a href="/internship" className='font-medium md:text-sm text-[8px] '>Internship</a>
                                    <a href="/reviews" className='font-medium md:text-sm text-[8px] '>Student Reviews</a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-1/3   md:mt-0'>
                            <div className=''>
                                <p className='font-bold md:text-xl text-[11px]'>Contact Info</p>
                                <div className="md:w-16 h-1 w-8 bg-customYellow rounded-md mt-2 md:mt-3 "></div>
                                <div className='flex items-center mt-7'>
                                    <img src="location.png" alt="Location" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="https://www.google.com/maps" className='font-medium md:text-sm text-[8px]'>Location/Address</a>
                                </div>
                                <div className='flex items-center mt-7'>
                                    <img src="footermail.png" alt="Email" className='md:pr-5 md:w-12 pr-2 w-6' />
                                    <a href="mailto:info@codestrup.com" className='font-medium md:text-sm text-[8px]'>Mail</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <hr className='w-[95vw]' />
                </div>
                <div className=" text-[10px] mt-4 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Codestrup Infotech. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
