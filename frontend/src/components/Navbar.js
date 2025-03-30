import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex h-[85vh]">
      {/* Sidebar */}
      <aside className="w-[20vw]  bg-[#4A4752] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#359BD2] text-center">AVILAMBH</h1>
          <nav className="mt-6 space-y-4 pt-24 pl-8">
            <Link to="/home" className="block text-gray-300 hover:text-white">HOME</Link>
            <Link to="/reports" className="block text-gray-300 hover:text-white">REPORTS</Link>
            <Link to="/safety" className="block text-gray-300 hover:text-white">SAFETY</Link>
            <Link to="/transport" className="block text-gray-300 hover:text-white">TRANSPORT</Link>
            <Link to="/inventory" className="block text-gray-300 hover:text-white ">INVENTORY</Link>
            <Link to="/production" className="block text-gray-300 hover:text-white ">PRODUCTION</Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
