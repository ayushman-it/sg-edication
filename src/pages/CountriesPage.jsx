import { Link, useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { countries } from '../data/siteData'
import { matchesSearch } from '../utils/helpers'

function CountriesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const filteredCountries = countries.filter((country) =>
    matchesSearch(`${country.name} ${country.summary} ${country.topPrograms.join(' ')}`, query),
  )

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Countries' }]}
        description="Students can compare destinations by intake, tuition, work rights, and program strengths through a clean responsive layout."
        eyebrow="Study Destinations"
        primaryCta={{ label: 'Get counselling help', href: '/contact' }}
        secondaryCta={{ label: 'Explore courses', href: '/courses' }}
        title="Choose a destination with clarity, not confusion."
      >
        <div className="mini-stat-list">
          <article>
            <span>Destinations</span>
            <strong>{countries.length}</strong>
          </article>
          <article>
            <span>Student filters</span>
            <strong>Live search</strong>
          </article>
          <article>
            <span>Responsive</span>
            <strong>All devices</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="filter-toolbar">
          <div className="section-heading left">
            <p className="eyebrow">Country search</p>
            <h2>Find a destination by goals, not only by popularity.</h2>
          </div>
          <input
            className="toolbar-input"
            onChange={(event) => setSearchParams(event.target.value ? { q: event.target.value } : {})}
            placeholder="Search by country or program..."
            value={query}
          />
        </div>

        <div className="listing-grid">
          {filteredCountries.map((country) => (
            <article className="listing-card" key={country.slug}>
              <div className="listing-card-top">
                <span>{country.name}</span>
                <p>{country.intake}</p>
              </div>
              <h3>{country.heroAccent}</h3>
              <p>{country.summary}</p>
              <div className="tag-row">
                {country.topPrograms.slice(0, 3).map((program) => (
                  <span key={program}>{program}</span>
                ))}
              </div>
              <Link className="text-link" to={`/countries/${country.slug}`}>
                View destination details
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default CountriesPage
