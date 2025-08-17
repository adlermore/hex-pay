import Image from 'next/image';
import React from 'react'
import logo from '@/public/images/logo.png'

function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Hex-Pays Logo"
            className="w-30"
          />
          <span className="font-semibold text-gray-900  uppercase">Hex-Pays</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 Hex-Pays. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
