import { Link, Navigate, useParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import Seo from '../components/shared/Seo'
import { blogPosts, colleges, countries, courses, exams } from '../data/siteData'

function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug)

  if (!course) {
    return <Navigate replace to="/courses" />
  }

  const destinationNames = course.destination.split(',').map((item) => item.trim())
  const relatedCountries = countries.filter((country) => destinationNames.includes(country.name)).slice(0, 3)
  const relatedColleges = colleges.filter((college) => college.category === course.category).slice(0, 3)
  const relatedExams = exams.filter((exam) => exam.stream === course.category).slice(0, 2)
  const relatedPosts = blogPosts
    .filter(
      (post) =>
        post.category === 'Planning' ||
        post.excerpt.toLowerCase().includes(course.title.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(course.category.toLowerCase()),
    )
    .slice(0, 2)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.seoDescription,
    provider: {
      '@type': 'Organization',
      name: 'SG Education Solution',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://sgeducationsolution.com',
    },
    courseMode: course.mode,
    educationalCredentialAwarded: course.title,
    timeRequired: course.duration,
    teaches: course.curriculum,
    occupationalCredentialAwarded: course.category,
  }

  return (
    <>
      <Seo
        canonicalPath={`/courses/${course.slug}`}
        description={course.seoDescription}
        jsonLd={structuredData}
        keywords={course.seoKeywords}
        title={course.seoTitle}
        type="article"
      />

      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: course.title },
        ]}
        description={course.seoDescription}
        eyebrow={`${course.category} Course Details`}
        primaryCta={{ label: 'Apply for guidance', href: '/direct-admission' }}
        secondaryCta={{ label: 'All courses', href: '/courses' }}
        title={course.heroHeadline}
      >
        <div className="hero-panel-stack">
          <article>
            <span>Duration</span>
            <strong>{course.duration}</strong>
          </article>
          <article>
            <span>Study mode</span>
            <strong>{course.mode}</strong>
          </article>
          <article>
            <span>Destinations</span>
            <strong>{course.destination}</strong>
          </article>
          <article>
            <span>Career track</span>
            <strong>{course.category}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section section-tight">
        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">Course overview</p>
            <h2>{course.title} course details</h2>
            <p>{course.overview}</p>
            <div className="tag-row">
              {course.specialisations.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Quick facts</p>
            <div className="detail-stat-grid">
              <article className="detail-stat-card">
                <span>Average fees</span>
                <strong>{course.averageFees}</strong>
              </article>
              <article className="detail-stat-card">
                <span>Study format</span>
                <strong>{course.studyFormat}</strong>
              </article>
              <article className="detail-stat-card">
                <span>Career scope</span>
                <strong>{course.salaryRange}</strong>
              </article>
              <article className="detail-stat-card">
                <span>Top outcomes</span>
                <strong>{course.careers.join(', ')}</strong>
              </article>
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading left">
          <p className="eyebrow">Admission essentials</p>
          <h2>Eligibility, admission planning, and syllabus areas students usually compare before applying.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Eligibility</h3>
            <ul className="bullet-list">
              {course.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="feature-card">
            <h3>Admission process</h3>
            <ul className="bullet-list">
              {course.admissionProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="feature-card">
            <h3>Curriculum snapshot</h3>
            <ul className="bullet-list">
              {course.curriculum.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="split-layout align-start">
          <article className="detail-panel">
            <p className="eyebrow">Why students choose this course</p>
            <h2>Meaningful information that helps families evaluate fit with more confidence.</h2>
            <ul className="bullet-list">
              {course.whyChoose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="eyebrow">Ideal for</p>
            <ul className="bullet-list">
              {course.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Career opportunities</p>
            <h2>Common outcomes after {course.title}</h2>
            <div className="tag-row">
              {course.careers.map((career) => (
                <span key={career}>{career}</span>
              ))}
            </div>

            <p className="eyebrow">Typical recruiters</p>
            <div className="tag-row">
              {course.topRecruiters.map((recruiter) => (
                <span key={recruiter}>{recruiter}</span>
              ))}
            </div>

            <p>{course.summary}</p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading left">
          <p className="eyebrow">Related options</p>
          <h2>Internal links that strengthen course discovery, comparison, and SEO depth.</h2>
        </div>

        <div className="detail-grid">
          <article className="detail-panel">
            <p className="eyebrow">Colleges</p>
            <div className="related-link-grid">
              {relatedColleges.length ? (
                relatedColleges.map((college) => (
                  <Link
                    className="mini-link-card"
                    key={college.slug}
                    to={`/colleges?category=${encodeURIComponent(course.category)}`}
                  >
                    <strong>{college.name}</strong>
                    <p>{college.location}</p>
                    <span>{college.badge}</span>
                  </Link>
                ))
              ) : (
                <p>No college highlights mapped yet for this category.</p>
              )}
            </div>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Exams and destinations</p>
            <div className="related-link-grid">
              {relatedExams.map((exam) => (
                <Link className="mini-link-card" key={exam.slug} to={`/exams?stream=${encodeURIComponent(exam.stream)}`}>
                  <strong>{exam.title}</strong>
                  <p>{exam.acceptedFor}</p>
                  <span>{exam.examDate}</span>
                </Link>
              ))}
              {relatedCountries.map((country) => (
                <Link className="mini-link-card" key={country.slug} to={`/countries/${country.slug}`}>
                  <strong>Study in {country.name}</strong>
                  <p>{country.highlight}</p>
                  <span>{country.optionsCount}</span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="split-layout align-start">
          <article className="detail-panel">
            <p className="eyebrow">Frequently asked questions</p>
            <div className="faq-list">
              {course.faq.map((item) => (
                <details key={item.question} open={item.question === course.faq[0].question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <p className="eyebrow">Read next</p>
            <div className="related-link-grid">
              {relatedPosts.map((post) => (
                <Link className="mini-link-card" key={post.slug} to={`/blog/${post.slug}`}>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                  <span>{post.date}</span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <InquiryForm
          compact
          subtitle={`Talk to SG Education Solution about ${course.title}, shortlist strategy, admissions, and the right college or destination fit.`}
          title={`Need guidance for ${course.title} admissions?`}
        />
      </AnimatedSection>
    </>
  )
}

export default CourseDetailPage
