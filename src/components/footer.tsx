import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">WF DESIGN <span className="text-yellow-400">+</span> BUILD</h3>
            <p className="text-slate-300 mb-4">
              Expert design and build services for residential projects, secondary suites, and tenant improvements.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-slate-300 hover:text-white transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link href="/services#renovations" className="text-slate-300 hover:text-white transition-colors">
                  Renovations
                </Link>
              </li>
              <li>
                <Link href="/services#secondary-suites" className="text-slate-300 hover:text-white transition-colors">
                  Secondary Suites
                </Link>
              </li>
              <li>
                <Link href="/services#tenant-improvements" className="text-slate-300 hover:text-white transition-colors">
                  Tenant Improvements
                </Link>
              </li>
              <li>
                <Link href="/services#custom-homes" className="text-slate-300 hover:text-white transition-colors">
                  Custom Homes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 shrink-0 mt-1" size={18} />
                <span className="text-slate-300">
                  123 Construction Way,<br />
                  Vancouver, BC, Canada
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 shrink-0" size={18} />
                <span className="text-slate-300">(604) 555-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 shrink-0" size={18} />
                <span className="text-slate-300">info@wfdesignbuild.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} WF Design + Build. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
