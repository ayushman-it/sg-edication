import { Link } from 'react-router-dom'

function Breadcrumbs({ items = [] }) {
  if (!items.length) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-trail">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span className="breadcrumb-item" key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <strong className="breadcrumb-current">{item.label}</strong>
            )}
            {!isLast ? <span className="breadcrumb-separator">/</span> : null}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
