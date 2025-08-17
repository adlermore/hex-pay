import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

function Header({ setIsPopupOpen }: { setIsPopupOpen: (open: boolean) => void }) {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 50
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top,
        behavior: "smooth",
      })
    }
  }

  const [scrollY, setScrollY] = useState(100)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="border-b sticky top-0 z-50 animate-fade-in transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollY / 100, 0.95)})}`,
        backdropFilter: `blur(${Math.min(scrollY / 10, 20)}px)`,
        borderBottomColor: `rgba(229, 231, 235, ${Math.min(scrollY / 100, 1)})}`,
      }}
    >
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer animate-slide-in-left"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src={logo}
            alt="Hex-Pays Logo"
            className="w-30"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 animate-slide-in-down">
          <button
            onClick={() => scrollToSection("why-hex-pays")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Why Hex-Pays
          </button>
          <button
            onClick={() => scrollToSection("what-we-do")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            What we do
          </button>
          <button
            onClick={() => scrollToSection("reliability")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Solutions you can measure
          </button>
          <button
            onClick={() => scrollToSection("how-we-work")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            How we work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <Button
          onClick={() => setIsPopupOpen(true)}
          className="animate-slide-in-right cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
        >
          Contact sales
        </Button>
      </div>
    </header>
  )
}

export default Header