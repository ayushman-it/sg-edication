import { ArrowRight, MapPin, ShieldCheck, Wallet } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { colleges } from '../data/siteData'
import { matchesSearch } from '../utils/helpers'

function CollegesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const region = searchParams.get('country') || 'All'
  const category = searchParams.get('category') || 'All'

  const countryOptions = ['All', ...new Set(colleges.map((college) => college.country))]
  const categoryOptions = ['All', ...new Set(colleges.map((college) => college.category))]

  const filteredColleges = colleges.filter((college) => {
    const matchesQuery = matchesSearch(
      `${college.name} ${college.category} ${college.country} ${college.summary} ${college.programs.join(' ')}`,
      query,
    )

    const matchesRegion = region === 'All' || college.country === region
    const matchesCategoryFilter = category === 'All' || college.category === category
    return matchesQuery && matchesRegion && matchesCategoryFilter
  })

  function updateParam(nextKey, nextValue) {
    const nextParams = new URLSearchParams(searchParams)
    if (!nextValue || nextValue === 'All') {
      nextParams.delete(nextKey)
    } else {
      nextParams.set(nextKey, nextValue)
    }

    setSearchParams(nextParams)
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Colleges' }]}
        description="Browse colleges more like the live SG Education Solution experience, but with cleaner cards, real filters, and stronger mobile behavior."
        eyebrow="Colleges and Universities"
        primaryCta={{ label: 'Book counselling', href: '/contact' }}
        secondaryCta={{ label: 'See countries', href: '/countries' }}
        title="Shortlist institutions by stream, location, and study intent."
      >
        <div className="mini-stat-list">
          <article>
            <span>Institutions</span>
            <strong>{colleges.length}</strong>
          </article>
          <article>
            <span>Countries</span>
            <strong>{countryOptions.length - 1}</strong>
          </article>
          <article>
            <span>Categories</span>
            <strong>{categoryOptions.length - 1}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="results-toolbar">
          <div className="results-copy">
            <p className="eyebrow">College directory</p>
            <h2>Image-led college cards with clearer filters, trust cues, and better shortlisting structure.</h2>
          </div>
          <div className="results-badge">
            <strong>{filteredColleges.length}</strong>
            <span>matching colleges</span>
          </div>
        </div>

        <div className="filter-toolbar complex">
          <input
            className="toolbar-input"
            onChange={(event) => updateParam('q', event.target.value)}
            placeholder="Search colleges or programs..."
            value={query}
          />
          <select
            className="toolbar-select"
            onChange={(event) => updateParam('country', event.target.value)}
            value={region}
          >
            {countryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <select
            className="toolbar-select"
            onChange={(event) => updateParam('category', event.target.value)}
            value={category}
          >
            {categoryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="college-directory-grid">
          {filteredColleges.map((college) => (
            <article className="college-card-pro" key={college.slug}>
              <div className="college-card-media">
                <img
                  alt={college.name}
                  className="college-card-image"
                  src={college.image}
                  style={college.imagePosition ? { objectPosition: college.imagePosition } : undefined}
                />
                <div className="college-card-overlay">
                  <span>{college.category}</span>
                  <p>{college.badge}</p>
                </div>
              </div>

              <div className="college-card-body">
                <div className="college-card-headline">
                  <div>
                    <h3>{college.name}</h3>
                    <p>{college.summary}</p>
                  </div>
                  <strong>{college.rating}</strong>
                </div>

                <div className="college-meta-strip">
                  <span>
                    <MapPin size={14} />
                    {college.location}, {college.country}
                  </span>
                  <span>
                    <ShieldCheck size={14} />
                    {college.type}
                  </span>
                  <span>
                    <Wallet size={14} />
                    {college.tuition}
                  </span>
                </div>

                <div className="college-stat-grid">
                  <article>
                    <span>Legacy</span>
                    <strong>{college.established}</strong>
                  </article>
                  <article>
                    <span>Approvals</span>
                    <strong>{college.approvals}</strong>
                  </article>
                  <article>
                    <span>Intake</span>
                    <strong>{college.intake}</strong>
                  </article>
                </div>

                <div className="tag-row">
                  {college.programs.map((program) => (
                    <span key={program}>{program}</span>
                  ))}
                </div>

                <div className="college-card-footer">
                  <span className="college-footer-note">Shortlist-ready profile with counselling support</span>
                  <Link className="text-link" to={`/contact`}>
                    Ask about this college
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default CollegesPage
