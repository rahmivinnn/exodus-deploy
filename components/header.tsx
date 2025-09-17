"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/images/exodus-logo.png" alt="Exodus Logistix" width={180} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-teal-600 font-medium">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-teal-600 font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/hazmat">Hazardous Materials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/freight-auditing">Freight Auditing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-teal-600 font-medium">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/industries">All Industries</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-teal-600 font-medium">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Case Studies</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-teal-600 font-medium">
                Join us <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Careers</DropdownMenuItem>
                <DropdownMenuItem>Carriers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/quote" className="text-gray-900 hover:text-teal-600 font-medium">
              Get Quote
            </Link>

            <Link href="/contact" className="text-gray-900 hover:text-teal-600 font-medium">
              Contact us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              📄
            </Button>
            <Link href="/quote">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
