import { useState } from 'react'
import './App.css'
import appData from "./data/appData";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className='flex justify-around py-2 bg-white text-black items-center'>
          <div className="logo flex items-center gap-2">
            <h1> 
              <img className='w-10' src="src/assets/logo.png" alt="logo" />
            </h1>
            <h2 className='font-bold'>HERO.IO</h2>
          </div>
          <div>
            <ul className='flex gap-4 font-bold'>
              <li>Home</li>
              <li>Apps</li>
              <li>Installation</li>
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
            <button className='btn bg-transparent border-1'><i class="fa-brands fa-google-play"></i> <span><img src="" alt="" /></span> Google Play</button>
            <button className='btn bg-transparent border-1'><i class="fa-brands fa-app-store-ios"></i> App Store</button>
          </div>
          <br />
          <div>
            <img src="/assets/hero.png" alt="" />
          </div>
        </div>
      </section>


    

<section className="py-10 bg-gray-100 ">
  <h1 className="text-3xl font-bold text-center mb-8">Our Apps</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 container">
    {appData.slice(0, 8).map(app => (
      <div key={app.id} className="bg-white shadow-md rounded-lg p-5 text-center">
        <div className="w-80 h-80 mx-auto mb-4 bg-gray-300 rounded"></div>
        <h2 className="text-xl font-bold text-black">{app.title}</h2>
        <div className='flex justify-between items-center my-4'>
          <p className="mt-2 text-green-700 bg-gray-200 p-2"><i class="fa-solid fa-download"></i> {(app.downloads / 1000000).toFixed(1)}M</p>
        <p className='text-orange-400'><i class="fa-solid fa-star"></i> {app.ratingAvg}</p>
        </div>
        
      </div>
    ))}
  </div>
</section>
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

export default App