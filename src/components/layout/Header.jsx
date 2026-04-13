import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Cpu,
  FlaskConical,
  Globe2,
  HeartPulse,
  Landmark,
  Menu,
  Phone,
  Pill,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { startTransition, useDeferredValue, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { countryShortcuts, navigation, searchIndex, siteMeta, topLinks } from '../../data/siteData'
import { matchesSearch } from '../../utils/helpers'
import useEnquiryModal from '../shared/useEnquiryModal'
import SearchDropdown from '../shared/SearchDropdown'

const categoryIcons = {
  Management: BriefcaseBusiness,
  Science: FlaskConical,
  Engineering: Cpu,
  Medical: HeartPulse,
  Commerce: Landmark,
  Arts: BookOpen,
  Paramedical: Pill,
  Pharmacy: Pill,
  Education: BookOpen,
  Dental: HeartPulse,
  'Computer Science': Cpu,
  'All Exams': Sparkles,
}

const megaMenuMeta = {
  Colleges: {
    title: 'Find colleges by stream',
    description: 'Browse major study fields with a cleaner, icon-led navigation experience.',
    featuredTitle: 'Verified college discovery',
    featuredText: 'Use stream-based shortlisting to move faster from browsing into counselling.',
    image: '/mega-colleges.svg',
  },
  Courses: {
    title: 'Explore professional courses',
    description: 'Category-first course discovery built to feel more precise and easier to scan.',
    featuredTitle: 'Better course navigation',
    featuredText: 'Students can jump to MBBS, B.Tech, MBA, law, and allied-health paths quickly.',
    image: '/mega-courses.svg',
  },
  Exams: {
    title: 'Entrance exams by stream',
    description: 'Scan national tests and exam categories through a tighter mega menu layout.',
    featuredTitle: 'Exam-led pathways',
    featuredText: 'Map exams directly to study streams like medical, engineering, management, and science.',
    image: '/mega-exams.svg',
  },
}

function Header() {
  const { openEnquiryModal } = useEnquiryModal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('')
  const navigate = useNavigate()
  const deferredQuery = useDeferredValue(query)
  const MotionDiv = motion.div
  const MotionAside = motion.aside

  const results = deferredQuery
    ? searchIndex.filter((item) => matchesSearch(item.keywords, deferredQuery)).slice(0, 8)
    : []

  function closePanels() {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
    setActiveMenu('')
  }

  function handleQueryChange(event) {
    const nextValue = event.target.value
    startTransition(() => {
      setQuery(nextValue)
      setIsSearchOpen(Boolean(nextValue))
    })
  }

  function handleSearchSubmit(event) {
    event.preventDefault()
    if (!query.trim()) {
      return
    }

    navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    closePanels()
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <p>Find colleges, courses, exams, and counselling support for India and study-abroad journeys.</p>
        <div className="topbar-actions">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <a href={`tel:${siteMeta.phone.replaceAll(' ', '')}`}>
            <Phone size={13} />
            {siteMeta.phone}
          </a>
        </div>
      </div>

      <div className="navbar">
        <Link className="brandmark" onClick={closePanels} to="/">
          <img alt="SG Education Solution" className="brandmark-logo" src="/sg-logo.png" />
          <div>
            <strong>{siteMeta.brand}</strong>
            <small>India + abroad counselling platform</small>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="desktop-nav"
          onMouseLeave={() => setActiveMenu('')}
        >
          {navigation.map((item) => {
            const isDropdownOpen = activeMenu === item.label
            const megaMeta = megaMenuMeta[item.label]

            if (!item.children) {
              return (
                <NavLink
                  key={item.href}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closePanels}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <div
                className="nav-dropdown"
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive || isDropdownOpen ? 'nav-link active with-icon' : 'nav-link with-icon'
                  }
                  onClick={closePanels}
                  to={item.href}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </NavLink>

                <AnimatePresence>
                  {isDropdownOpen ? (
                    <MotionDiv
                      animate={{ opacity: 1, y: 0 }}
                      className="nav-dropdown-panel mega-menu-panel"
                      exit={{ opacity: 0, y: -8 }}
                      initial={{ opacity: 0, y: -8 }}
                    >
                      <div className="mega-menu-grid">
                        <div className="mega-menu-main">
                          <div className="mega-menu-header">
                            <p>{megaMeta.title}</p>
                            <span>{megaMeta.description}</span>
                          </div>
                          <div className="mega-link-grid">
                            {item.children.map((child) => {
                              const Icon = categoryIcons[child.label] || Building2

                              return (
                                <Link className="mega-link-card" key={child.href} onClick={closePanels} to={child.href}>
                                  <span className="icon-badge">
                                    <Icon size={14} />
                                  </span>
                                  <div>
                                    <strong>{child.label}</strong>
                                    <small>Explore {child.label.toLowerCase()} options</small>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>

                        <div className="mega-feature-card">
                          <img
                            alt={`${item.label} preview`}
                            className="mega-feature-image"
                            src={megaMeta.image}
                          />
                          <span className="icon-badge feature">
                            <Globe2 size={14} />
                          </span>
                          <strong>{megaMeta.featuredTitle}</strong>
                          <p>{megaMeta.featuredText}</p>
                          <div className="mega-mini-links">
                            {countryShortcuts.slice(0, 4).map((country) => (
                              <Link key={country.href} onClick={closePanels} to={country.href}>
                                {country.label}
                              </Link>
                            ))}
                          </div>
                          <button
                            className="mega-action-link button-reset"
                            onClick={() => {
                              closePanels()
                              openEnquiryModal()
                            }}
                            type="button"
                          >
                            Talk to counsellor
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </div>
                    </MotionDiv>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>

        <div className="header-actions">
          <form className="searchbar" onSubmit={handleSearchSubmit}>
            <Search size={16} />
            <input
              aria-label="Search colleges, courses, exams and countries"
              onChange={handleQueryChange}
              onFocus={() => setIsSearchOpen(Boolean(query))}
              placeholder="Search colleges, exams, MBBS..."
              value={query}
            />
            <SearchDropdown
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              query={query}
              results={results}
            />
          </form>

          <button
            className="primary-button compact"
            onClick={openEnquiryModal}
            type="button"
          >
            Apply Now
          </button>

          <button
            aria-label="Open menu"
            className="menu-button"
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className="country-strip">
        <div className="country-strip-track">
          {countryShortcuts.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="top-link-strip">
          {topLinks.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <MotionDiv
              animate={{ opacity: 1 }}
              className="mobile-menu-backdrop"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={closePanels}
            />
            <MotionAside
              animate={{ opacity: 1, x: 0 }}
              className="mobile-drawer"
              exit={{ opacity: 1, x: '100%' }}
              initial={{ opacity: 1, x: '100%' }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <div className="mobile-drawer-head">
                <Link className="brandmark mobile-brandmark" onClick={closePanels} to="/">
                  <img alt="SG Education Solution" className="brandmark-logo" src="/sg-logo.png" />
                  <div>
                    <strong>{siteMeta.brand}</strong>
                    <p>Browse pages, streams, and destinations</p>
                  </div>
                </Link>
                <button
                  aria-label="Close menu"
                  className="menu-button drawer-close"
                  onClick={closePanels}
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>

              <form className="searchbar drawer-searchbar" onSubmit={handleSearchSubmit}>
                <Search size={16} />
                <input
                  aria-label="Search on mobile"
                  onChange={handleQueryChange}
                  placeholder="Search colleges, exams, MBBS..."
                  value={query}
                />
              </form>

              <div className="mobile-menu-links">
                {navigation.map((item) => (
                  <div className="mobile-menu-group" key={item.label}>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                      onClick={closePanels}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                    {item.children ? (
                      <p className="mobile-group-note">{megaMenuMeta[item.label]?.description}</p>
                    ) : null}
                    {item.children ? (
                      <div className="mobile-submenu">
                        {item.children.map((child) => {
                          const Icon = categoryIcons[child.label] || Building2

                          return (
                            <Link key={child.href} onClick={closePanels} to={child.href}>
                              <Icon size={14} />
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mobile-drawer-section">
                <p className="mobile-section-title">Quick destinations</p>
                <p className="mobile-section-copy">Jump into the most searched India and abroad options.</p>
              </div>
              <div className="mobile-country-links">
                {countryShortcuts.map((country) => (
                  <Link key={country.href} onClick={closePanels} to={country.href}>
                    {country.label}
                  </Link>
                ))}
              </div>

              <button
                className="primary-button mobile-drawer-cta"
                onClick={() => {
                  closePanels()
                  openEnquiryModal()
                }}
                type="button"
              >
                Talk to Counsellor
              </button>
            </MotionAside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
