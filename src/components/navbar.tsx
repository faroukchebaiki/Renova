"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial scroll state based on current scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg = isScrolled || !isHomePage ? "bg-white shadow-md" : "bg-transparent";
  const textColor = isScrolled || !isHomePage ? "text-slate-800 hover:text-blue-600" : "text-white hover:text-blue-100";
  const buttonStyle = isScrolled || !isHomePage ? "bg-blue-600 text-white" : "bg-white text-blue-600";
  const mobileMenuIconColor = isScrolled || !isHomePage ? "" : "text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg} py-4`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-40">
            <h1 className="${textColor} font-bold text-4xl" >
              <span className="text-blue-400" >RE</span>
              <span className="text-yellow-400">nova</span>
              </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${textColor} ${
                pathname === item.href ? "font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact#contact">
            <Button className={`${buttonStyle} hover:bg-blue-700 hover:text-white`}>
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={mobileMenuIconColor}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mt-6 mb-8">
                  <h1 className="${textColor} font-bold text-4xl" >
                    <span className="text-blue-400" >RE</span>
                    <span className="text-yellow-400">nova</span>
                  </h1>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                      pathname === item.href ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact#contact">
                <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                  Get a Quote
                </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
