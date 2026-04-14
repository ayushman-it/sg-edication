import { Link, useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { searchIndex } from '../data/siteData'
import { groupByType, matchesSearch } from '../utils/helpers'

function SearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = query ? searchIndex.filter((item) => matchesSearch(item.keywords, query)) : []
  const groupedResults = groupByType(results)

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Search' },
        ]}
        description="Use one search to explore colleges, courses, countries, exams, and student resources."
        eyebrow="Global Search"
        primaryCta={{ label: 'Browse all pages', href: '/' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
        title={query ? `Search results for "${query}"` : 'Search the student journey'}
      >
        <div className="hero-panel-stack">
          <article>
            <span>Search mode</span>
            <strong>Grouped results</strong>
          </article>
          <article>
            <span>Source</span>
            <strong>Colleges, courses, exams, and more</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="filter-toolbar">
          <div className="section-heading left">
            <p className="eyebrow">Search again</p>
            <h2>One search field for the whole website.</h2>
          </div>
          <input
            className="toolbar-input"
            onChange={(event) => setSearchParams(event.target.value ? { q: event.target.value } : {})}
            placeholder="Search countries, colleges, courses..."
            value={query}
          />
        </div>

        <div className="search-results-page">
          {Object.keys(groupedResults).length ? (
            Object.entries(groupedResults).map(([type, items]) => (
              <section className="result-group" key={type}>
                <div className="result-group-head">
                  <h3>{type}</h3>
                  <span>{items.length} matches</span>
                </div>
                <div className="result-group-list">
                  {items.map((item) => (
                    <Link className="result-tile" key={`${item.type}-${item.label}`} to={item.path}>
                      <span>{item.type}</span>
                      <strong>{item.label}</strong>
                      <p>{item.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="empty-state">
              <h3>No results yet</h3>
              <p>Try course names, destinations, exams, or article topics.</p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  )
}

export default SearchResultsPage
