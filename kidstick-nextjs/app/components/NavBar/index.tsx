'use client'

import { ChevronDown, Heart, Mail, Menu, Phone, Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/pages', label: 'Pages', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/cart', label: 'Cart(0)' }
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#00E5FF]">
      {/* Top Bar */}
      <div className="hidden sm:block w-full bg-[#00E5FF] py-2 px-4 border-b border-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white" />
              <span className='text-[#373737] font-semibold'>EMAIL US: <span className='text-[#343839] font-medium'>info@kidstick.com.bd</span></span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white" />
              <span className='text-[#373737] font-semibold'>CALL US: <span className='text-[#343839] font-medium'>+8801404049797</span></span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <span>Visit us on social networks</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5ba8fd] rounded-full text-white">
              <FaFacebook width={16} height={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#60e188] rounded-full text-white">
              <FaInstagram width={16} height={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#fdb157] rounded-full text-white">
              <FaTwitter width={16} height={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#ff6b6d] rounded-full text-white">
              <FaLinkedin width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#00E5FF] py-4 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt='Website Logo'
                height={100}
                width={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-black hover:text-gray-700 flex items-center"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
              <Heart className="w-5 h-5" />
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-orange-500"></span>
            </button>
            <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-black/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
            } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-2 space-y-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-black hover:text-gray-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 py-4 border-t border-black/10">
              <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
                <Heart className="w-5 h-5" />
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-orange-500"></span>
              </button>
              <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-red-400 rounded-full bg-[#0C1A40] text-white">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

