import { Link, useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { courses } from '../data/siteData'
import { matchesSearch } from '../utils/helpers'

function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'All'

  const categoryOptions = ['All', ...new Set(courses.map((course) => course.category))]

  const filteredCourses = courses.filter((course) => {
    const matchesQuery = matchesSearch(
      `${course.title} ${course.category} ${course.summary} ${course.destination} ${course.careers.join(' ')}`,
      query,
    )
    const matchesCategory = category === 'All' || course.category === category
    return matchesQuery && matchesCategory
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
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
        description="Course browsing now feels closer to the live SG Education Solution site, with strong category-first discovery and cleaner responsive cards."
        eyebrow="Course Explorer"
        primaryCta={{ label: 'Discuss course fit', href: '/contact' }}
        secondaryCta={{ label: 'Check exams', href: '/exams' }}
        title="Filter courses by field, outcome, and destination."
      >
        <div className="hero-panel-stack">
          <article>
            <span>Categories</span>
            <strong>{categoryOptions.length - 1}</strong>
          </article>
          <article>
            <span>Built for</span>
            <strong>Faster shortlisting</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="filter-toolbar complex">
          <input
            className="toolbar-input"
            onChange={(event) => updateParam('q', event.target.value)}
            placeholder="Search a course or career path..."
            value={query}
          />
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

        <div className="listing-grid">
          {filteredCourses.map((course) => (
            <article className="listing-card" key={course.slug}>
              <div className="listing-card-top">
                <span>{course.category}</span>
                <p>{course.mode}</p>
              </div>
              <h3>{course.title}</h3>
              <p>{course.summary}</p>
              <div className="meta-list">
                <span>{course.duration}</span>
                <span>{course.destination}</span>
              </div>
              <div className="tag-row">
                {course.careers.map((career) => (
                  <span key={career}>{career}</span>
                ))}
              </div>
              <Link className="text-link" to={`/courses/${course.slug}`}>
                View course details
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default CoursesPage
