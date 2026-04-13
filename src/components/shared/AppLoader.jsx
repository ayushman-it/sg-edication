import { useEffect, useState } from 'react'
import { assetPath } from '../../utils/assets'

function AppLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      setIsLeaving(true)
    }, 900)

    const hideTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1250)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <div className={isLeaving ? 'app-loader is-leaving' : 'app-loader'} role="status" aria-live="polite">
          <div className="app-loader-panel">
            <img alt="SG Education Solution" className="app-loader-logo" src={assetPath('sg-logo.png')} />
            <div className="app-loader-copy">
              <strong>SG Education Solution</strong>
              <p>Preparing colleges, courses, exams, and counselling journeys.</p>
            </div>
            <div className="app-loader-skeleton">
              <div className="skeleton-pill shimmer" />
              <div className="skeleton-row shimmer" />
              <div className="skeleton-row short shimmer" />
              <div className="skeleton-card-grid">
                <div className="skeleton-card shimmer" />
                <div className="skeleton-card shimmer" />
              </div>
            </div>
            <div className="app-loader-bar">
              <span />
            </div>
          </div>
        </div>
      ) : null}
      {children}
    </>
  )
}

export default AppLoader
