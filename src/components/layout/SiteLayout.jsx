import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { EnquiryModalProvider } from '../shared/EnquiryModalProvider'
import PageSkeleton from '../shared/PageSkeleton'

function RouteViewport({ children }) {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsPageLoading(false)
    }, 420)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return isPageLoading ? <PageSkeleton /> : children
}

function SiteLayout() {
  const location = useLocation()

  return (
    <EnquiryModalProvider>
      <div className="site-shell">
        <Header />
        <main>
          <RouteViewport key={`${location.pathname}${location.search}`}>
            <Outlet />
          </RouteViewport>
        </main>
        <Footer />
      </div>
    </EnquiryModalProvider>
  )
}

export default SiteLayout
