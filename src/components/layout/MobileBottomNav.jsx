import { BookOpen, Building2, House, MessageCircle, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { siteMeta } from '../../data/siteData'

const whatsappHref = `https://wa.me/${siteMeta.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Hello SG Education Solution, I want help finding the right college and course.',
)}`

const navItems = [
  { label: 'Home', to: '/', icon: House, end: true },
  { label: 'Colleges', to: '/colleges', icon: Building2 },
  { label: 'Courses', to: '/courses', icon: BookOpen },
  { label: 'Contact', to: '/contact', icon: Phone },
]

function MobileBottomNav() {
  return (
    <nav aria-label="Mobile quick navigation" className="mobile-bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon

        return (
          <NavLink
            className={({ isActive }) => (isActive ? 'mobile-bottom-link active' : 'mobile-bottom-link')}
            end={item.end}
            key={item.label}
            to={item.to}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        )
      })}

      <a className="mobile-bottom-link whatsapp" href={whatsappHref} rel="noreferrer" target="_blank">
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </nav>
  )
}

export default MobileBottomNav
