// import { useState, useEffect } from 'react'
// import { Code2, Sun, Moon, Menu, X } from 'lucide-react'
// import { navLinks, personalInfo } from '../data/portfolioData'

// export default function Navbar() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b transition-colors ${
//         scrolled ? 'bg-bg/90 backdrop-blur-md border-border' : 'bg-bg border-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
//           <Code2 className="text-brand-purple" size={22} />
//           {personalInfo.name}
//         </a>

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
//           {navLinks.map((link) => (
//             <li key={link.label}>
//               <a
//                 href={link.href}
//                 className="hover:text-text-primary transition-colors data-[active=true]:text-brand-purple"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Right controls */}
//         <div className="flex items-center gap-4">
//           <div className="hidden sm:flex items-center gap-2 text-text-secondary">
//             <Sun size={16} />
//             <button
//               role="switch"
//               aria-checked={isDark}
//               aria-label="Toggle dark mode"
//               onClick={() => setIsDark((d) => !d)}
//               className={`relative w-10 h-5 rounded-full transition-colors ${
//                 isDark ? 'bg-brand-gradient' : 'bg-border'
//               }`}
//             >
//               <span
//                 className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
//                   isDark ? 'translate-x-5' : 'translate-x-0'
//                 }`}
//               />
//             </button>
//             <Moon size={16} />
//           </div>

//           <button
//             className="md:hidden text-text-primary"
//             aria-label="Toggle menu"
//             onClick={() => setMenuOpen((o) => !o)}
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-text-secondary border-t border-border pt-4">
//           {navLinks.map((link) => (
//             <li key={link.label}>
//               <a href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-text-primary">
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   )
// }





import { useState, useEffect } from 'react'
import { Code2, Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-border' : 'bg-bg border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <Code2 className="text-brand-purple" size={22} />
          {personalInfo.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-text-secondary">
            <Sun size={16} />
            <button
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className={`relative w-10 h-5 rounded-full transition-colors ${
                isDark ? 'bg-brand-gradient' : 'bg-border'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                  isDark ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <Moon size={16} />
          </div>

          <button className="md:hidden text-text-primary" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-text-secondary border-t border-border pt-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}