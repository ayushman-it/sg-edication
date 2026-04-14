import { useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import { examStreams, exams } from '../data/siteData'
import { matchesSearch } from '../utils/helpers'

function ExamsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const stream = searchParams.get('stream') || 'All Exams'

  const filteredExams = exams.filter((exam) => {
    const matchesQuery = matchesSearch(
      `${exam.title} ${exam.stream} ${exam.acceptedFor} ${exam.format} ${exam.tips.join(' ')}`,
      query,
    )
    const matchesStream = stream === 'All Exams' || exam.stream === stream
    return matchesQuery && matchesStream
  })

  function updateParam(nextKey, nextValue) {
    const nextParams = new URLSearchParams(searchParams)
    if (!nextValue || nextValue === 'All Exams') {
      nextParams.delete(nextKey)
    } else {
      nextParams.set(nextKey, nextValue)
    }

    setSearchParams(nextParams)
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Exams' }]}
        description="The exams page now aligns with the live-site category flow, so students can jump from management, science, engineering, or medical navigation directly into matching exam lists."
        eyebrow="Exam Preparation"
        primaryCta={{ label: 'Ask exam questions', href: '/contact' }}
        secondaryCta={{ label: 'See courses', href: '/courses' }}
        title="Search and filter entrance exams by stream."
      >
        <div className="hero-panel-stack">
          <article>
            <span>Exam streams</span>
            <strong>{examStreams.length}</strong>
          </article>
          <article>
            <span>Responsive cards</span>
            <strong>Desktop to mobile</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="filter-toolbar complex">
          <input
            className="toolbar-input"
            onChange={(event) => updateParam('q', event.target.value)}
            placeholder="Search NEET, JEE, CAT..."
            value={query}
          />
          <select
            className="toolbar-select"
            onChange={(event) => updateParam('stream', event.target.value)}
            value={stream}
          >
            {examStreams.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="listing-grid">
          {filteredExams.map((exam) => (
            <article className="listing-card" key={exam.slug}>
              <div className="listing-card-top">
                <span>{exam.stream}</span>
                <p>{exam.examDate}</p>
              </div>
              <h3>{exam.title}</h3>
              <p>{exam.acceptedFor}</p>
              <div className="meta-list">
                <span>{exam.examLevel}</span>
                <span>{exam.format}</span>
              </div>
              <div className="tag-row">
                {exam.tips.map((tip) => (
                  <span key={tip}>{tip}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <InquiryForm
          compact
          subtitle="Tell us your target course or exam, and our team will help you plan the next step."
          title="Need help choosing the right entrance exam?"
        />
      </AnimatedSection>
    </>
  )
}

export default ExamsPage
