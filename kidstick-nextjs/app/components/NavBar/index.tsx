'use client'

import { ChevronDown, Heart, Mail, Menu, Phone, Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/pages', label: 'Pages', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' }
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#00E5FF]">
      {/* Top Bar */}
      <div className="hidden sm:block w-full bg-[#00E5FF] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>EMAIL US: info@kidstick.com.bd</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>CALL US: +8801404049797</span>
            </div>
          </div>
          <div>
            <span>Visit us on social networks</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#00E5FF] py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/cart" className="flex items-center space-x-1">
              <ShoppingBag className="w-6 h-6" />
              <span>Cart(0)</span>
            </Link>
            <button className="p-2 hover:bg-black/5 rounded-full">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full">
              <User className="w-6 h-6" />
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
          className={`lg:hidden ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-2 space-y-4">
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
              <button className="p-2 hover:bg-black/5 rounded-full">
                <Search className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-black/5 rounded-full">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-black/5 rounded-full">
                <ShoppingBag className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-black/5 rounded-full">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

