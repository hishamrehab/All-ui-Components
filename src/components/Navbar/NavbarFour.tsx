import React, { useState } from "react";

function NavbarFour() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          src="data:image/jpeg;base64,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"
          className="w-100 h-10 mr-2"
          alt="Logo"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavbarFour;
