import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, breadcrumbs, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-description">{description}</p>
        <div className="hero-actions">
          {primaryCta ? <Link className="primary-button" to={primaryCta.href}>{primaryCta.label}</Link> : null}
          {secondaryCta ? <Link className="secondary-button" to={secondaryCta.href}>{secondaryCta.label}</Link> : null}
        </div>
      </div>
      <div className="page-hero-panel">{children}</div>
    </section>
  )
}

export default PageHero
