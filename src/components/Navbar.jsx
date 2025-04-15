import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaUser, FaHeart, FaQuestionCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { BiScan } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="border-b z-50 relative bg-white" ref={menuRef}>
      {/* Top section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold text-green-900">
            ZENNI <sup className="text-sm font-normal">22</sup>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-grow max-w-2xl mx-6 items-center bg-gray-100 rounded-full px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search glasses and contacts"
            className="flex-grow bg-transparent outline-none text-sm"
          />
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-black">
            <BiScan className="text-xl" />
            <span>Visual Search</span>
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          {[
            { icon: <FaUser />, label: 'Login' },
            { icon: <FaHeart />, label: 'Favorites' },
            { icon: <FaQuestionCircle />, label: 'Help' },
            { icon: <FaShoppingCart />, label: 'Cart' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center hover:text-black cursor-pointer">
              <div className="text-xl mb-1">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="hidden md:flex justify-center space-x-8 bg-gray-50 py-2 font-semibold text-gray-800">
        <a href="#home" className="hover:text-black">Home</a>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#product" className="hover:text-black">Product</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>

      {/* Mobile dropdown menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              <div className="flex flex-col space-y-3 text-gray-800 font-medium">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#product" onClick={() => setIsOpen(false)}>Product</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </div>
              <div className="flex justify-around pt-4 border-t text-gray-600">
                <FaUser />
                <FaHeart />
                <FaQuestionCircle />
                <FaShoppingCart />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
