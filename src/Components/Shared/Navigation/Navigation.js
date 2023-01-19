import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'allMovies'}>All Movies</Link></li>
                </ul>
                </div>
                <Link to={'/'} className="hover:text-red-400 text-white text-2xl">Quad Movie</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:text-red-400 text-white '><Link to={'/'}>Home</Link></li>
                    <li className='hover:text-red-400 text-white '><Link to={'allMovies'}>All Movies</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/registration'} className="btn btn-xs md:btn-sm lg:btn-sm hover:bg-red-400 bg-red-500 text-white border-0 px-6">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navigation;