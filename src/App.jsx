import { useState } from 'react'
import './App.css'

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

    </>
  )
}

export default App