import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Desktop Menu (visible on larger screens) */}
                    <div className="flex lg:flex lg:items-center lg:space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            Github
                        </NavLink>
                        <NavLink
                            to="/user"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                    isActive ? "text-orange-700" : "text-gray-700"
                                } hover:text-orange-700`
                            }
                        >
                            User
                        </NavLink>
                    </div>

                    {/* Buttons (Log in and Get started) */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
                            aria-controls="mobile-menu-2"
                            aria-expanded={menuOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (visible when the state is toggled) */}
                {menuOpen && (
                    <div className="flex flex-col lg:hidden">
                        <NavLink
                            to="/"
                            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/github"
                            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                        >
                            Github
                        </NavLink>
                        <NavLink
                            to="/user"
                            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50"
                        >
                            User
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
}
