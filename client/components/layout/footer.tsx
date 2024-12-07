import CONSTANTS from "@/constants/contants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border-t border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-2 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  About Us
                </h3>
                <p className="text-sm text-gray-600">
                  We are a company dedicated to creating amazing experiences for
                  our customers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Contact Us
                </h3>
                <p className="text-sm text-gray-600">
                  123 Main St, Anytown, USA 12345
                  <br />
                  Email: info@example.com
                  <br />
                  Phone: (123) 456-7890
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 border-t border-white/20 pb-2 text-center shadow-md w-full">
        <p className="text-sm text-gray-600">
          © 2023 {CONSTANTS.APP_DETAILS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
