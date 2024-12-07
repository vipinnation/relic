import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "../user-button";
import CONSTANTS from "@/constants/contants";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-800">
                  {CONSTANTS.APP_DETAILS.name}
                </span>
              </Link>
              <nav className="hidden md:block ml-10">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="ml-auto flex items-center ">
                <ModeToggle />
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
