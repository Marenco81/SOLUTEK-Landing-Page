import { navItems } from "../../utils/navItems"
import { Container, NavItem } from "../shared"
import logo from "/assets/icon.png"
// import { navItems } from "./Navbar"

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src={logo} alt="Solutek Logo" className="w-7 h-7" />
              <span className="text-lg font-semibold text-heading-1">Solutek</span>
            </div>
            <ul className="flex gap-6 text-heading-1">
              {navItems.map((item, key) => (
                <NavItem key={key} href={item.href} text={item.text}>

                </NavItem>
              ))}
            </ul>
          </div>

      </Container>
    </footer>
  )
}
