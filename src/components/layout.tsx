import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <div className={layoutStyles.headerContent}>
          <div className={layoutStyles.logo}>
            <Link to="/">
              <StaticImage 
                src="../images/logo_paterhagen.png" 
                alt="Verein Partnerschaft Ghana" 
                placeholder="blurred"
                height={50}
                style={{
                  maxWidth: '200px'
                }}
              />
            </Link>
          </div>
          
          <nav className={layoutStyles.nav}>
            <button 
              className={layoutStyles.mobileMenuBtn}
              onClick={toggleMenu}
              aria-label="Menu öffnen"
            >
              ☰
            </button>
            
            <ul className={`${layoutStyles.navList} ${isMenuOpen ? layoutStyles.navListOpen : ''}`}>
              {/* Über uns Dropdown */}
              <li className={layoutStyles.navItem}>
                <button
                  className={layoutStyles.dropdownBtn}
                  onClick={() => handleDropdownToggle('about')}
                  aria-expanded={openDropdown === 'about'}
                >
                  Über uns ▼
                </button>
                {openDropdown === 'about' && (
                  <ul className={layoutStyles.dropdown}>
                    <li><Link to="/der-verein">Der Verein</Link></li>
                    <li><Link to="/pater-hagen">Pater Hagen</Link></li>
                    <li><Link to="/chronik">Chronik</Link></li>
                    <li><Link to="/sammlungen">Sammlungen</Link></li>
                    <li><Link to="/presse">Presse</Link></li>
                    <li><Link to="/statistik">Statistik</Link></li>
                  </ul>
                )}
              </li>

              {/* Partnergemeinde Dropdown */}
              <li className={layoutStyles.navItem}>
                <button
                  className={layoutStyles.dropdownBtn}
                  onClick={() => handleDropdownToggle('partner')}
                  aria-expanded={openDropdown === 'partner'}
                >
                  Partnergemeinde ▼
                </button>
                {openDropdown === 'partner' && (
                  <ul className={layoutStyles.dropdown}>
                    <li><Link to="/partnerschaftskommitee">Partnerschaftskommitee</Link></li>
                    <li><Link to="/spenden">Spenden</Link></li>
                    <li><Link to="/projekte">Projekte</Link></li>
                    <li><Link to="/berichte-kalba">Berichte aus Kalba</Link></li>
                    <li><Link to="/besuche-ghana">Besuche nach Ghana</Link></li>
                  </ul>
                )}
              </li>

              {/* Direkte Links */}
              <li className={layoutStyles.navItem}>
                <Link to="/partner">Partner</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link to="/links">Links</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link to="/bilder">Bilder</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link to="/blaue-tonne">Blaue Tonne</Link>
              </li>
              <li className={layoutStyles.navItem}>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              
              {/* Suche */}
              <li className={layoutStyles.navItem}>
                <Link to="/suche">Suche</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={layoutStyles.main}>
        {children}
      </main>

      <footer className={layoutStyles.footer}>
        <div className={layoutStyles.footerContent}>
          <p>&copy; 2025 Verein. Alle Rechte vorbehalten.</p>
          <nav className={layoutStyles.footerNav}>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Layout