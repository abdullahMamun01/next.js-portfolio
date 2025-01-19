"use client"

import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 h-10 w-10 flex flex-col justify-center items-center gap-1.5 bg-green-500 rounded-md md:hidden"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:w-[250px] md:hidden
      `}>
        <Sidebar />
      </div>
    </>
  )
}

