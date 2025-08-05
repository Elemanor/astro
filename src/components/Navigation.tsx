import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, Search, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-gray-900 text-white py-2 sm:py-3 text-center px-4">
        <p className="text-xs sm:text-sm font-medium">
          Experiencing basement flooding? Call 24/7: <span className="font-semibold">(437) 545-0067</span>
        </p>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden">
        {/* Full Navigation (Initial State) */}
        <div className={cn(
          "bg-white border-b shadow-sm transition-all duration-300",
          isScrolled ? "transform -translate-y-full opacity-0" : ""
        )}>
          <div className="px-3 py-2">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <span className="text-xl font-montserrat">
                  Dry<span className="font-bold">Space</span>
                </span>
              </a>
              <div className="flex items-center gap-2">
                <a href="tel:4375450067" className="text-sm text-red-600 font-bold flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>Emergency</span>
                </a>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-none">
              <a href="/services/sump-pump-installation-toronto">
                <Button size="sm" className="rounded-full whitespace-nowrap bg-primary text-white">
                  Sump Pumps
                </Button>
              </a>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
                Services
              </Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
                Our Process
              </Button>
              <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
                Reviews
              </Button>
              <Button size="sm" className="rounded-full whitespace-nowrap">
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full whitespace-nowrap ml-auto"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-4 h-4 mr-1" />
                More
              </Button>
            </div>
          </div>
        </div>

        {/* Minimal Navigation (Scrolled State) */}
        <div className={cn(
          "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b shadow-md transition-all duration-300",
          isScrolled ? "transform translate-y-0 opacity-100" : "transform -translate-y-full opacity-0"
        )}>
          <div className="px-3 py-2 flex items-center justify-between">
            <a href="/" className="text-lg font-montserrat">
              D<span className="font-bold">S</span>
            </a>
            <div className="flex items-center gap-2">
              <Button size="sm" className="rounded-full">
                Quote
              </Button>
              <Button size="sm" variant="destructive" className="rounded-full">
                <Phone className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <span className="text-2xl font-montserrat">
                    Dry<span className="font-bold">Space</span>
                  </span>
                </a>
              </div>
              
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                  {/* Services Dropdown */}
                  <div className="relative">
                    <Button 
                      variant="ghost" 
                      className="font-medium flex items-center gap-1"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      Services
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <a href="/services/sump-pump-installation-toronto" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-primary">Sump Pump Installation</div>
                              <div className="text-sm text-gray-600">Protect from flooding</div>
                            </div>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Featured</span>
                          </div>
                        </a>
                        <div className="border-t my-2"></div>
                        <a href="/services/basement-waterproofing" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Basement Waterproofing</a>
                        <a href="/services/foundation-crack-repair" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Foundation Crack Repair</a>
                        <a href="/services/interior-drainage" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Interior Drainage</a>
                        <a href="/services/exterior-waterproofing" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Exterior Waterproofing</a>
                      </div>
                    )}
                  </div>
                  {['Process', 'Warranty', 'About', 'Reviews'].map((item) => (
                    <Button key={item} variant="ghost" className="font-medium">
                      {item}
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Button className="font-semibold">
                    Book Free Inspection
                  </Button>
                  <a href="tel:4375450067" className="text-red-600 font-bold text-sm hover:text-red-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="hidden xl:inline">(437) 545-0067</span>
                      <span className="xl:hidden">Emergency</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="ml-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ×
              </Button>
              <nav className="mt-8 space-y-4">
                {['Services', 'Process', 'Warranty', 'About', 'Reviews', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block py-2 text-lg hover:text-primary"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}