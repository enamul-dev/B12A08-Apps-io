import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import appData from "./data/appData";

const Installation = () => {
    return (
        <div>
            <Header />


            <section className="py-10 bg-gray-100">
  <h1 className="text-3xl font-bold text-center mb-5 text-black">Your Installed Apps</h1>
  <p className='text-center text-gray-400 pb-10'>Explore All Trending Apps on the Market developed by us</p>
  {/* dropdown */}
  <div className='container flex justify-between py-5'>
    <div><h1 className='text-black font-bold text-2xl'>1 Apps Found</h1></div>
    <div className="dropdown dropdown-bottom dropdown-end ">
  <div tabIndex={0} role="button" className="btn m-1 bg-gray-100 text-black">Sort By Size <i class="fa-solid fa-angle-down"></i></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
  </div>
  <div className="grid grid-cols-1 gap-6 px-6 container">
    {appData.slice(0, 3).map(app => (
      <div key={app.id} className="bg-white flex justify-between items-center shadow-md rounded-lg p-5 text-center ">
        <div className='flex'>
            <div className="w-20 h-20 mb-4 bg-gray-300 rounded flex "></div>
        <div className='flex flex-col ml-4'>
            <div>
                <h2 className="text-sm md:text-xl font-bold text-black">{app.title}</h2>
            </div>
            
            <div>
                <div className='flex gap-4 items-center my-4'>
                <p className=" text-green-700 bg-gray-200 p-2"><i class="fa-solid fa-download"></i> {(app.downloads / 1000000).toFixed(1)}M</p>
                <p className='text-orange-400'><i class="fa-solid fa-star"></i> {app.ratingAvg}</p>
                </div>
            </div>
            
        </div>
        </div>
        
        
<div>
            <button className="btn btn-success">Success</button>
        </div>        
      </div>
    ))}
    
  </div>
   
</section>


            <Footer />
        </div>
    );
};

export default Installation;