import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav className="flex justify-around py-2 bg-white text-black items-center">
        <div className="logo flex items-center gap-2">
          <h1>
            <img className="w-10" src="/assets/logo.png" alt="logo" />
          </h1>
          <h2 className="font-bold">HERO.IO</h2>
        </div>
        <div>
          <ul className="flex gap-4 font-bold">
            <li><Link to="/">Home</Link></li>
            <li > <Link to="/AppDetails">Apps</Link></li>
            <li><Link to="/Installation">Installation</Link></li>
          </ul>
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white rounded">
            <i className="fa-brands fa-github"></i> Contribute
          </button>
        </div>
      </nav>
    </header>
  );
}
