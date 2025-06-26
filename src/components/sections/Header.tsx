"use client"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white py-4 fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-xl font-bold">Vibery</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              利用規約
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                利用規約
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
