// import { contactItems } from "../../utils/contactItems"
import { BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs"
import { navItems } from "../../utils/navItems"
import { Container, NavItem } from "../shared"
import logo from "../../assets-src/logo.png"
import { CiFacebook } from "react-icons/ci"
import { MdOutlineMailOutline } from "react-icons/md"
// import { navItems } from "./Navbar"

export const Footer = () => {
  return (
    <footer id="contact-info" className="relative pt-18 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src={logo} alt="Solutek Logo" className="w-20 h-20" />
              <div className="inline-flex text-4xl font-semibold text-heading-1"><span className="bg-gradient-to-r from-orange-900 to-blue-950 text-transparent bg-clip-text"> SoTek </span></div>
            </div>
            <ul className="flex gap-6 text-heading-1">
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text}>

                </NavItem>
              ))}
            </ul>
            <div className="flex justify-between items-center mr-10 ml-10 mt-5">
              <ul className="flex sm:flex-col flex-row gap-5 text-heading-1 text-sm flex-wrap">
              {/* {contactItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text}>
                  
                </NavItem>
              ))} */}
              <li><a href="https://wa.me/50670247365?text=Hola,%20quisiera%20comunicarme%20con%20ustedes." target="_blank" rel="noopener noreferrer" className="flex flex-row md:text-md ease-linear hover:text-orange-900"><BsWhatsapp /><span className="ml-3">+506 7024-7365</span></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61584560732276&sk=about" target="_blank" rel="noopener noreferrer" className="flex flex-row text-sm md:text-md ease-linear hover:text-orange-900"><CiFacebook className="text-2xl mr-3" /><span className="ml-3"> Sotek CR</span></a></li>
              <li><a href="tel:70247365" className="flex flex-row text-sm md:text-md ease-linear hover:text-orange-900"><BsTelephoneOutbound /><span className="ml-3">+506 7024-7365</span></a></li>
              <li><a href="mailto:info@sotek-cr.com" className="flex flex-row text-sm md:text-md ease-linear hover:text-orange-900"><MdOutlineMailOutline /><span className="ml-3">info@sotek-cr.com</span></a></li>
            </ul>
            </div>
          </div>

      </Container>
    </footer>
  )
}
