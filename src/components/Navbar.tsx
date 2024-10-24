import React from 'react';
import { Joystick, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/90 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Joystick className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold">6reys Entertainment Yard</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#games" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Games</a>
              <a href="#events" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Events</a>
              <a href="#location" className="hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Location</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-white hover:bg-pink-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#games" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Games</a>
            <a href="#events" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#location" className="hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">Location</a>
          </div>
        </div>
      )}
    </nav>
  );
}