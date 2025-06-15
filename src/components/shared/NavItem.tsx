
interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({href, text}: NavItemProps) => {
  return (
    <li>
        <a 
            href={href} 
            className="duration-300 font-medium ease-linear hover:text-violet-600 py-3"
        >
            {text}
        </a>
    </li>
  )
}
