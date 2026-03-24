import React from 'react';
import Image from "next/image";

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    const links = [
        { label: "Products", href: "https://www.spotnana.com/modern-infrastructure/" },
        { label: "Platform", href: "https://www.spotnana.com/platform/" },
        { label: "Partners", href: "https://www.spotnana.com/all-partners/" },
        { label: "Resources", href: "https://www.spotnana.com/blog/" },
        { label: "Company", href: "https://www.spotnana.com/about/" },
    ];

    return (
        <header className="sticky top-0 bg-white shadow-lg rounded-b-2xl w-full">
            <nav className="flex items-center justify-between px-6 py-4">
                {/* Spotnana Logo */}
                <div className="w-1/2 lg:w-1/6 ">
                    <a src="https://www.spotnana.com">
                        <Image 
                            src="/logo.svg"
                            width={200}
                            height={200}
                            alt="Spotnana logo"
                        />
                    </a>
                </div>

                {/* Navbar on Desktop View */}
                <div className="w-1/2 px-10 hidden lg:block">
                <ul className="flex items-center justify-between font-semibold">
                    {links.map(({ label, href }) => (
                    <li key={label} className="hover:underline hover:font-bold">
                        <a href={href}>{label}</a>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Important User Links on Desktop View */}
                <div className="w-1/3 hidden lg:flex justify-end items-center gap-4">
                    <a className="font-semibold hover:underline hover:font-bold px-7" href="https://app.spotnana.com/">
                        Login
                    </a>
                    <a
                        href="https://www.spotnana.com/request-a-demo/"
                        className="bg-red-700 rounded-full py-2 px-3 text-white font-semibold hover:bg-white hover:text-red-700 outline-2 outline-red-700"
                    >
                        Request a Demo
                    </a>
                </div>

                {/* Mobile burger button */}
                <div className="w-1/2 flex justify-end items-center lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>

            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-6 pb-4 flex flex-col gap-3">
                    {links.map(({ label, href }) => (
                        <a key={label} href={href} className="font-semibold hover:underline">
                            {label}
                        </a>
                    ))}
                    <a href="https://app.spotnana.com/" className="font-semibold hover:underline">
                        Login
                    </a>
                    <a
                        href="https://www.spotnana.com/request-a-demo/"
                        className="bg-red-700 rounded-full py-2 px-3 text-white font-semibold text-center hover:bg-white hover:text-red-700 outline-2 outline-red-700"
                    >
                        Request a Demo
                    </a>
                </div>
            )}
        </header>
    );
}

export default Header;