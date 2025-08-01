import { BtnLink, Container, NavItem } from "../shared"
import logo from "/assets/icon.png"
import { useThemeStore } from "../../store";
import { navItems } from "../../utils/navItems";
import { useState } from "react";
import { Menu, X } from "lucide-react";



export const Navbar = () => {
  const {toggleTheme, theme} = useThemeStore();


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }


  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6"> 
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
        {/*Logo*/}
        <div className="min-w-max inline-flex relative">
          <a href="/" className="relative flex items-center gap-3">
            <img src={logo} alt="Solutek Logo" className="w-10 h-10"/>
            <div className="inline-flex text-4xl font-semibold text-heading-1"><span className="bg-gradient-to-r from-orange-900 to-blue-950 text-transparent bg-clip-text"> SoluTek </span></div>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
          <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key}></NavItem>
            ))}
          </ul>
          <div 
            className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px6 lg:px-0"
          >
            <BtnLink text="Get Started" href="#cta" className="hover:bg-orange-500 hover:scale-105"></BtnLink>
          </div>
        </div>

        <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar} className="text-neutral-300 z-30">
                        {mobileDrawerOpen ? <X/> : <Menu/> }
                    </button>
        </div>

        {mobileDrawerOpen && (
                <div className="absolute right-0 z-20 bg-none backdrop-blur-xl rounded-xl w-full p-12 flex flex-col justify-center text-heading-1 items-center lg:hidden">
                    <ul className="transition duration-200">
                        {navItems.map((item, index) => (
                            <li className='py-4' key={index}>
                                <a href={item.href}> {item.text} </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center space-x-12 items-center ml-6 mt-10'>
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-amber-50 hover:text-black hover:rounded-md hover:font-semibold '>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 ml-2 rounded-md hover:scale-105'>
                        Create an account
                    </a>
                </div>
                </div>
            )}

        <div className="min-w-max flex items-center gap-x-3">
            <button 
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
        </div>
        </nav>
      </Container>
    </header>
  )
}
