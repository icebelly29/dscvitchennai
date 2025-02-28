/* eslint-disable */

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0">
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <nav className="w-full shadow justify-between px-4 md:items-center md:flex md:px-8 font-productSans">
        <div className="image flex-1">
          <Link href={`/`}>
            <img
              src="/Icons/horizontal-logo.png"
              alt="gdsc logo"
              className="w-1/3 h-1/3 m-3"
            />
          </Link>
        </div>

        <div className="hidden items-center justify-between py-3 md:py-5 md:flex">
          {/* Responsive Navbar */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "hidden" : "block"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <a>Vision</a>
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <a>Team</a>
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <a>Events</a>
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li className="text-black">
                <Link href="/contributors">
                  <a>Contributors</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
