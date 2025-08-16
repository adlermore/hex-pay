import { CreditCard } from 'lucide-react'
import Image from 'next/image';
import React from 'react'
import logo from '@/public/images/logo.png'

interface FooterProps {
  scrollToSection: (section: string) => void;
}

function Footer({scrollToSection}: FooterProps) {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Hex-Pays Logo"
            className="w-20"
          />
          <span className="font-semibold text-gray-900">Hex-Pays</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <button
            onClick={() => scrollToSection("terms")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => scrollToSection("privacy")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Privacy
          </button>
        </div>

        <p className="text-sm text-gray-500">© 2025 Hex-Pays. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer