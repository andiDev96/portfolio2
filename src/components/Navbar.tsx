'use client'

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
    <nav className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl text-indigo-600 dark:text-indigo-400 ">Andreas Unterholzner</Link>
                </div>
                {/* Menu Desktop*/ }
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-inidgo-400">
                    Home
                    </Link>


                    <Link href="/progetti" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-inidgo-400">
                    Progetti
                    </Link>


                    <Link href="/skills" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-inidgo-400">
                    Skills
                    </Link>


                    <Link href="/contatti" className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-inidgo-400">
                    Contatti
                    </Link>
                </div>
                {/* Menu Mobile Button */}
                <div className="md:hidden flex items-center">
                    <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    ></button>
                </div>
            </div>
        </div>
    </nav>
)
}
