import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Attributes from './components/Attributes'
import Internship from './components/Internship'
import About from './components/About'
import SetUp from './components/SetUp'
import Timeline from './components/Timeline'
import Studentreview from './components/Studentreview'
import Footer from './components/Footer'
import Support from './components/Support'



const router = createBrowserRouter([
  {
    path: "/",
    element: <><App /></>,
    children:[
      
      {
        path: "/attributes",
        element: <><Attributes /></>
      },
      {
        path: "/internship",
        element: <><Internship /></>
      },
      {
        path: "/about",
        element: <><About /></>
      },
      

    ]
  },

 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
  // </React.StrictMode>,
  <>
    <RouterProvider router={router} />
    {/* <About />
    <Attributes />
    <SetUp />
    <Internship />
    <Timeline />
    <Studentreview />
    <Support />
  <Footer /> */}
    {/* <App /> */}
  <a href="https://lordicon.com/"></a>

    {/* <HeroSection/> */}


  </>
)
