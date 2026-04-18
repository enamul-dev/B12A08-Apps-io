import React from "react";
import appData from "./data/appData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
export default function AppDetails() {
  return (
<>
<Header />

    <section className="py-10 bg-gray-100 ">
  <h1 className="text-3xl font-bold text-center mb-5 text-black">Our All Applications </h1>
  <p className='text-center text-gray-400 pb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>  
  
  <div className="flex justify-between container"> 
        <div className="py-10">
            <h1 className="text-black text-2xl bg-gray-100 font-bold">(132) Apps Found</h1>
        </div>
        <div className="py-10">
            <label className="input bg-gray-300">
  <svg className="h-[1em] opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8" className="text-gray-600"></circle>
      <path d="m21 21-4.3-4.3" className="text-gray-600"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" className="bg-gray-300 text-gray-600" />
</label>
        </div>
    </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 container">  
    {appData.map(app => (
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
<Footer />
  </>
  );
}
