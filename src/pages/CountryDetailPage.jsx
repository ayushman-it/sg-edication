import { Link, Navigate, useParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import { countries } from '../data/siteData'

function CountryDetailPage() {
  const { slug } = useParams()
  const country = countries.find((item) => item.slug === slug)

  if (!country) {
    return <Navigate replace to="/countries" />
  }

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Countries', href: '/countries' },
          { label: country.name },
        ]}
        description={country.summary}
        eyebrow={`Study in ${country.name}`}
        primaryCta={{ label: 'Apply with support', href: '/direct-admission' }}
        secondaryCta={{ label: 'All countries', href: '/countries' }}
        title={country.heroAccent}
      >
        <div className="hero-panel-stack">
          <article>
            <span>Tuition</span>
            <strong>{country.tuition}</strong>
          </article>
          <article>
            <span>Intakes</span>
            <strong>{country.intake}</strong>
          </article>
          <article>
            <span>Work rights</span>
            <strong>{country.workRights}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">Why students choose {country.name}</p>
            <h2>{country.highlight}</h2>
            <p>{country.summary}</p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">Popular cities</p>
            <div className="tag-row">
              {country.popularCities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
            <p className="eyebrow">Top programs</p>
            <div className="tag-row">
              {country.topPrograms.map((program) => (
                <span key={program}>{program}</span>
              ))}
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading">
          <p className="eyebrow">Application checklist</p>
          <h2>Frontend content blocks that can later become dynamic.</h2>
        </div>
        <div className="feature-grid">
          {country.checklist.map((item) => (
            <article className="feature-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <InquiryForm
          compact
          subtitle={`Ask about colleges, courses, scholarships, and visa timelines for ${country.name}.`}
          title={`Plan your ${country.name} admission strategy`}
        />
        <div className="content-end-link">
          <Link className="text-link" to="/courses">
            Compare popular courses next
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}

export default CountryDetailPage
