import PageHero from '../components/shared/PageHero'

function NotFoundPage() {
  return (
    <PageHero
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: '404' },
      ]}
      description="The page you requested is not part of the current frontend map."
      eyebrow="404"
      primaryCta={{ label: 'Return home', href: '/' }}
      secondaryCta={{ label: 'Open contact page', href: '/contact' }}
      title="This page does not exist yet."
    >
      <div className="hero-panel-stack">
        <article>
          <span>Tip</span>
          <strong>Use the global search or main navigation to continue.</strong>
        </article>
      </div>
    </PageHero>
  )
}

export default NotFoundPage
