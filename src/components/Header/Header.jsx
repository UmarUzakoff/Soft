import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../Carousel/images/logo.webp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container bg-white mb-24">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="##" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Haqida
          </a>

          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Xizmatlar
          </a>
          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Ishlar
          </a>
          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Narxi
          </a>
          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Blog
          </a>
          <a
            href="##"
            className="text-xl font-semibold leading-6 text-gray-900 hover:opacity-60">
            Aloqa
          </a>
        </Popover.Group>
        {/* <div class="hidden md:inline-flex">
          <div class="relative text-black mt-3 dark:text-white">
            <div class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"></path>
              </svg>
            </div>
            <ul class="hidden">
              <li class="text-lg text-white dark:text-black hover:text-gray-300 hover:dark:text-gray-600 duration-200 font-normal cursor-pointer active">
                En
              </li>
              <li class="text-lg text-white dark:text-black hover:text-gray-300 hover:dark:text-gray-600 duration-200 font-normal cursor-pointer">
                Ru
              </li>
              <li class="text-lg text-white dark:text-black hover:text-gray-300 hover:dark:text-gray-600 duration-200 font-normal cursor-pointer">
                Uz
              </li>
            </ul>
          </div>
          <h1 class="text-xs -ml-0.5 mt-2 text-black dark:text-white">uz</h1>
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button class="p-2 pl-5 pr-5 bg-black border-2 border-black text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-2 focus:border-gray-500">
            Tungi
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}></Dialog>
      <hr />
    </header>
  );
}
