// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">A💛K</Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-blue-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-400">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-blue-400">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="hover:text-blue-400">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
