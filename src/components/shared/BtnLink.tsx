
interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({href, text, className = ""}: BtnLinkProps) => {
  return (
    <a 
      href={href} 
      className={`px-2 py-2 rounded-full outline-none relative overflow-hidden border bg-blue-900 dark:bg-orange-800 cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  )
}
