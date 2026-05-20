import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Header() {
     const [menuOpen, setMenuOpen] = useState(false);
    return <nav className="shadow-md fixed w-full top-0 z-50 bg-[#fbf4ef]">
                <div className="flex justify-between items-center px-6">
                    {/* LOGO */}
                    <div className="flex items-center">
                    <img
                        src="/assets/logo.png" // replace with your logo path
                        alt="Food Godava Logo"
                        className="w-16 h-16 object-contain"
                    />
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-8 font-medium">
                    <li>
                        <Link to="/#home">Home</Link>
                    </li>
                    <li>
                        <Link to="/#ourstory">Our Story</Link>
                    </li>
                    <li>
                        <Link to="/#menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/#recipe">Recipe</Link>
                    </li>
                    <li>
                        <Link to="/#ourbranches">Branches</Link>
                    </li>
                    <li>
                        <Link to="/#contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    ☰
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                            <div className="md:hidden bg-white px-6 pb-4 space-y-3">
                            <Link to="/#home" className="block">
                                Home
                            </Link>
                            <Link to="/#ourstory" className="block">
                                Our Story
                            </Link>
                            <Link to="/#menu" className="block">
                                Menu
                            </Link>
                            <Link to="/#recipe" className="block">
                                Recipe
                            </Link>
                            <Link to="/#ourbranches" className="block">
                                Branches
                            </Link>
                            <Link to="/#contact" className="block">
                                Contact
                            </Link>
                            </div>
                )}
            </nav>;
}



