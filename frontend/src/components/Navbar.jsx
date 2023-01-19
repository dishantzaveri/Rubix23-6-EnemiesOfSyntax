import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full flex px-36 py-4 justify-between items-center bg-white">
      <div className="flex">
        <h1 className="text-2xl font-bold">Vote.</h1>
      </div>
      <div className="flex gap-10 items-center">
        <Link to="/">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Home
          </h1>
        </Link>
        <Link to="/history">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            History
          </h1>
        </Link>
        <button className="text-white uppercase rounded-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-800 hover:to-cyan-600">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar