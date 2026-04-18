import React from "react";
import './App.css'
import appData from "./data/appData";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import AppDetails from "./AppDetails";
import Installation from "./Installation";
import AppInstall from "./AppInstall";


function Home() {
  
const navigate = useNavigate();
  return (
    <>
    
      <header>
        <nav className='flex justify-around py-2 bg-white text-black items-center'>
          <div className="logo flex items-center gap-2">
            <h1> 
              <img className='w-10' src="/assets/logo.png" alt="logo" />
            </h1>
            <h2 className='font-bold'>HERO.IO</h2>
          </div>
          <div>
            <ul className="flex gap-4 font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li > <Link to="/AppDetails">Apps</Link></li>
                        <li><Link to="/Installation">Installation</Link></li>
                      </ul>
          </div>
          <div>
            <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white rounded '><i class="fa-brands fa-github"></i> Contribute</button>
          </div>
        </nav>
      </header>

      {/* hero section */}
      <section className='flex justify-center bg-[#D2D2D2]'>
        <div className='pt-7'>
          <h1 className='text-5xl text-center text-black font-bold'>We Build <br />
          <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>Productive</span> Apps
          </h1>
          <br />
          <p className='text-center text-gray-500'>At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <br />
          <div className='flex gap-2 justify-center'>
            <button href="https://www.apple.com/app-store/" target="_blank" className='btn bg-transparent ' > <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 466 511.98">
 <g id="Layer_x0020_1">
  <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
  <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
  <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
  <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
 </g>
</svg>
 <a href="https://play.google.com/store/games?hl=en" target="_blank" className='text-black'>Google Play</a></button>
            <button className='btn bg-transparent'><img src="appstore.svg" className='w-10 h-10' alt="" /><a href="https://www.apple.com/app-store/" target="_blank" className='text-black'>App Store</a></button>
          </div>
          <br />
          <div>
            <img src="/assets/hero.png" alt="" />
          </div>
        </div>
      </section>


    {/* Json Data section */}

<section className="py-10 bg-gray-100 ">
  <h1 className="text-3xl font-bold text-center mb-5 text-black">Trending Apps</h1>
  <p className='text-center text-gray-400 pb-10'>Explore All Trending Apps on the Market developed by us</p>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 container">
    {appData.slice(0, 8).map(app => (
      
      <div key={app.id} className="bg-white shadow-md rounded-lg p-5 text-center">
        <Link to={`/AppInstall/${app.id}`}>
        <div className="mx-auto mb-4 bg-gray-300 rounded"><img className="w-full h-full" src={app.image} alt={app.title} /></div>
        <h2 className="text-xl font-bold text-black">{app.title}</h2>
        </Link>
        <div className='flex justify-between items-center my-4'>
          <p className="mt-2 text-green-700 bg-gray-200 p-2"><i class="fa-solid fa-download"></i> {(app.downloads / 1000000).toFixed(1)}M</p>
        <p className='text-orange-400'><i class="fa-solid fa-star"></i> {app.ratingAvg}</p>
        </div>
        
      </div>
    ))}
  </div>
   
</section>
<div className='bg-gray-100 flex justify-center py-10'>
<button  className="btn btn-primary bg-[#8c52ee] border-none" onClick={() => navigate("/AppDetails")}>Show All</button>
</div>

  {/* stats section */}

      <section className='h-132 md:h-80 bg-[#8c52ee] flex flex-col justify-center items-center'>

        <h1 className='font-bold text-3xl my-9'>Trusted By Millions, Built For You</h1>
        <div className='flex flex-col md:flex-row justify-center gap-7 items-center text-center'>
          <div className='flex flex-col gap-3'>
            <p>Total Downloads</p>
            <h2 className='text-5xl font-bold'>29.6M</h2>
            <p>21% More Than Last Month</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p>Total Reviews</p>
            <h2 className='text-5xl font-bold'>906K</h2>
            <p>46% More Than The Last Month</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p>Active Apps</p>
            <h2 className='text-5xl font-bold '>132+</h2>
            <p>31 More Will Launch</p>
          </div>
        </div>
       
      </section>



{/* footer */}


<footer >
  <div className='flex justify-between container py-10'>
    <div className=' flex items-center gap-2'>
    <img className='w-10 ' src="assets/logo.png " alt="" />
    <h1>Hero.IO</h1>
  </div>
  <div className=''>
    <h1>Social Links</h1>
    <span className='flex gap-2'>
      <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-x-twitter"></i>
    </span>
    
  </div>
  </div>
  <hr className='pb-5'/>
  <span className='block text-center container pb-5'>Copyright © 2025 - All right reserved</span>
</footer>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/AppDetails" element={<AppDetails />}
         />
         <Route path="/Installation" element={<Installation />} /> 
         <Route path="/AppInstall/:id" element={<AppInstall />} />
      </Routes>
      
    </Router>
  );
}

