import { Link } from 'react-router-dom'
import { footerGroups, siteMeta } from '../../data/siteData'
import { assetPath } from '../../utils/assets'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-hero">
        <div>
          <p className="eyebrow">Start your next step</p>
          <h2>Get clear guidance for colleges, courses, and study destinations.</h2>
        </div>
        <div className="footer-hero-copy">
          <p>
            From first shortlist to final application, SG Education Solution helps students and
            families move ahead with confidence.
          </p>
          <Link className="secondary-button light" to="/direct-admission">
            Start application
          </Link>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brandmark footer-brandmark">
            <img alt="SG Education Solution" className="brandmark-logo" src={assetPath('sg-logo.png')} />
            <div>
              <strong>{siteMeta.brand}</strong>
              <small>Find the right colleges and career path</small>
            </div>
          </div>
          <p>{siteMeta.office}</p>
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <a href={`tel:${siteMeta.phone.replaceAll(' ', '')}`}>{siteMeta.phone}</a>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <div className="footer-links">
              {group.links.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>Explore colleges, courses, exams, and study-abroad options in one place.</p>
        <p>Get support for counselling, applications, and planning your next academic move.</p>
      </div>
    </footer>
  )
}

export default Footer
