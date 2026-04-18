// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between container py-10">
        <div className="flex items-center gap-2">
          <img className="w-10" src="assets/logo.png" alt="" />
          <h1>Hero.IO</h1>
        </div>
        <div>
          <h1>Social Links</h1>
          <span className="flex gap-2">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </span>
        </div>
      </div>
      <hr className="pb-5" />
      <span className="block text-center container pb-5">
        Copyright © 2025 - All right reserved
      </span>
    </footer>
  );
}
