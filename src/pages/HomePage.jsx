import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MapPinned,
  Newspaper,
  SearchCheck,
  Pill,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import useEnquiryModal from '../components/shared/useEnquiryModal'
import { assetPath, commonsFilePath } from '../utils/assets'
import {
  abroadDestinations,
  blogPosts,
  careerPaths,
  colleges,
  countryShortcuts,
  examStreams,
  exams,
  nationalDestinations,
  siteMeta,
  topLinks,
} from '../data/siteData'

const careerIcons = {
  Management: BriefcaseBusiness,
  Science: FlaskConical,
  Engineering: Cpu,
  Medical: HeartPulse,
  Commerce: Landmark,
  Arts: BookOpen,
  Paramedical: Pill,
  Education: GraduationCap,
  Dental: HeartPulse,
  'Computer Science': Cpu,
}

const careerVisuals = {
  Management: assetPath('career-business.svg'),
  Science: assetPath('career-science.svg'),
  Engineering: assetPath('career-engineering.svg'),
  Medical: assetPath('career-medical.svg'),
  Commerce: assetPath('career-business.svg'),
  Arts: assetPath('career-arts.svg'),
  Paramedical: assetPath('career-medical.svg'),
  Education: assetPath('career-education.svg'),
  Dental: assetPath('career-medical.svg'),
  'Computer Science': assetPath('career-technology.svg'),
}

const whyChooseCards = [
  {
    title: 'Verified & Trusted Information',
    description: 'Updated college, course, exam, and admission details that students and parents can rely on.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Career Guidance',
    description: 'Friendly counsellors help students compare the right path based on goals, budget, and eligibility.',
    icon: SearchCheck,
  },
  {
    title: 'Personalized Recommendations',
    description: 'Shortlists are shaped around stream, location, budget, and preferred study destination.',
    icon: Sparkles,
  },
  {
    title: 'Global Opportunities & Support',
    description: 'From India to international admissions, the platform supports discovery, guidance, and next steps.',
    icon: Globe2,
  },
]

const trustedShowcase = Array.from({ length: 6 }, (_, index) => ({
  id: `trusted-${index + 1}`,
  label: 'SG Education Solution - Explore Indian & International Colleges',
}))

const studentShowcase = [
  {
    title: 'Real student goals',
    caption: 'Indian students exploring better-fit colleges with counselling support.',
    image: commonsFilePath('College Students.jpg'),
    imagePosition: 'center 25%',
  },
  {
    title: 'Campus-ready guidance',
    caption: 'A more human look and feel for the journey from search to admission.',
    image: commonsFilePath('Indian Students 4616.JPG'),
    imagePosition: 'center 35%',
  },
  {
    title: 'Focused study journey',
    caption: 'Real academic visuals help the platform feel more grounded and trustworthy.',
    image: commonsFilePath('Indian student reading.jpg'),
    imagePosition: 'center 35%',
  },
]

function HomePage() {
  const { openEnquiryModal } = useEnquiryModal()
  const [activeCollegeCategory, setActiveCollegeCategory] = useState('All')
  const [activeExamStream, setActiveExamStream] = useState('All Exams')
  const featuredCollegeCategories = ['All', ...new Set(colleges.map((college) => college.category))]

  const featuredColleges =
    activeCollegeCategory === 'All'
      ? colleges.slice(0, 4)
      : colleges.filter((college) => college.category === activeCollegeCategory).slice(0, 4)

  const filteredExams =
    activeExamStream === 'All Exams'
      ? exams
      : exams.filter((exam) => exam.stream === activeExamStream)

  return (
    <>
      <section className="home-hero replica-hero">
        <div className="hero-overlay replica-overlay" />
        <div className="hero-grid replica-hero-grid">
          <div className="hero-copy replica-copy">
            <p className="eyebrow">Best platform to find your dream course and colleges</p>
            <h1>Explore colleges, courses, and study destinations with confidence.</h1>
            <p className="hero-description">
              Search by category, compare options in India and abroad, and get counselling support
              for your next academic move.
            </p>
            <div className="hero-action-cluster">
              <div className="hero-actions">
                <Link className="primary-button" to="/colleges">
                  Find Colleges
                </Link>
                <button className="secondary-button" onClick={openEnquiryModal} type="button">
                  Get Counselling
                </button>
              </div>
              <div className="quick-link-grid">
                {topLinks.map((item) => (
                  <Link key={item.href} to={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hero-photo-grid hero-photo-grid-left">
              {studentShowcase.map((item) => (
                <article className="hero-photo-card" key={item.title}>
                  <div className="hero-photo-copy">
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </div>
                  <img
                    alt=""
                    aria-hidden="true"
                    src={item.image}
                    style={{ objectPosition: item.imagePosition }}
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="hero-display replica-display">
            <div className="hero-search-panel">
              <p className="eyebrow">Study journeys</p>
              <h3>India, MBBS abroad, management, engineering, and more.</h3>
              <div className="hero-country-pill-row">
                {countryShortcuts.map((country) => (
                  <Link key={country.href} to={country.href}>
                    {country.label}
                  </Link>
                ))}
              </div>
              <div className="hero-metric-list">
                {siteMeta.heroStats.map((item) => (
                  <article key={item.label}>
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="content-section section-tight">
        <div className="section-heading left">
          <p className="eyebrow">Choose your career path</p>
          <h2>Explore streams through colorful cards with subject-led visuals, cleaner hierarchy, and faster scanning.</h2>
        </div>
        <div className="career-grid">
          {careerPaths.map((path) => {
            const Icon = careerIcons[path.label] || GraduationCap
            const artwork = careerVisuals[path.label] || assetPath('career-education.svg')

            return (
              <Link className={`career-card tone-${path.color}`} key={path.slug} to={`/courses?category=${encodeURIComponent(path.label)}`}>
                <div className="career-card-media">
                  <img alt={`${path.label} illustration`} className="career-card-image" src={artwork} />
                  <div className="career-card-head">
                    <span className="icon-badge subtle">
                      <Icon size={14} />
                    </span>
                    <span className="career-options">{path.options}</span>
                  </div>
                </div>
                <div className="career-card-copy">
                  <h3>{path.label}</h3>
                  <p>{path.description}</p>
                  <div className="inline-link">
                    Explore stream
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading left">
          <p className="eyebrow">Popular national studies</p>
          <h2>State-by-state discovery for India-focused students.</h2>
        </div>
        <div className="destination-grid compact">
          {nationalDestinations.map((state) => (
            <article className="destination-card" key={state.label}>
              <div className="destination-card-head">
                <span className="icon-badge subtle">
                  <MapPinned size={14} />
                </span>
                <span>{state.options}</span>
              </div>
              <h3>{state.label}</h3>
              <p>Explore leading colleges and courses across major states and student cities.</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="section-heading left">
          <p className="eyebrow">Popular abroad studies</p>
          <h2>Compare popular study destinations for MBBS, management, engineering, and more.</h2>
        </div>
        <div className="destination-grid">
          {abroadDestinations.map((country) => (
            <Link className="destination-card abroad" key={country.slug} to={`/countries/${country.slug}`}>
              <div className="destination-card-head">
                <span className="icon-badge subtle">
                  <MapPinned size={14} />
                </span>
                <span>{country.options}</span>
              </div>
              <h3>{country.label}</h3>
              <p>{country.summary}</p>
              <div className="inline-link">
                Explore destination
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="counselling-band">
          <div>
            <p className="eyebrow">Career counselling</p>
            <h2>We guide students in selecting the right colleges and career path for a brighter future.</h2>
          </div>
          <button className="primary-button" onClick={openEnquiryModal} type="button">
            Get free counselling
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="why-choose-shell">
          <div className="why-choose-copy">
            <p className="eyebrow">Why Choose Us?</p>
            <h2>We're committed to helping you achieve your goals by offering a seamless platform, expert guidance, and trusted opportunities.</h2>
            <p className="why-choose-description">
              Whether you're searching for your dream college, career, or course, we simplify your journey with reliable information and real results.
            </p>

            <div className="why-choose-list">
              {whyChooseCards.map((item) => {
                const Icon = item.icon

                return (
                  <article className="why-choose-item" key={item.title}>
                    <span className="icon-badge feature">
                      <Icon size={15} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            <button className="primary-button" onClick={openEnquiryModal} type="button">
              Contact Now
            </button>
          </div>

          <div className="why-choose-panel">
            <div className="why-panel-brand">
              <img alt="SG Education Solution logo" src={assetPath('sg-logo.png')} />
              <div>
                <strong>SG Education Solution</strong>
                <p>Explore Indian & International Colleges</p>
              </div>
            </div>

            <div className="why-panel-stat">
              <BadgeCheck size={18} />
              <div>
                <strong>10,000+ Happy Students & Professionals</strong>
                <p>Trusted support for college discovery, counselling, admissions, and study-abroad pathways.</p>
              </div>
            </div>

            <div className="why-panel-metrics">
              {siteMeta.heroStats.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted trusted-section">
        <div className="trusted-band">
          <div className="trusted-band-copy">
            <p className="eyebrow">Trusted By</p>
            <h2>SG Education Solution continues to support students with dependable counselling and college discovery.</h2>
          </div>

          <div className="trusted-grid">
            {trustedShowcase.map((item) => (
              <article className="trusted-item" key={item.id}>
                <img alt="SG Education Solution mark" src={assetPath('sg-logo.png')} />
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="results-toolbar">
          <div className="results-copy">
            <p className="eyebrow">Featured colleges</p>
            <h2>Explore image-led college profiles by category right from the homepage.</h2>
          </div>
          <div className="results-badge">
            <strong>{featuredColleges.length}</strong>
            <span>featured profiles</span>
          </div>
        </div>

        <div className="college-category-row">
          {featuredCollegeCategories.map((category) => (
            <button
              className={activeCollegeCategory === category ? 'stream-pill active' : 'stream-pill'}
              key={category}
              onClick={() => setActiveCollegeCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="college-directory-grid featured-home-grid">
          {featuredColleges.map((college) => (
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
                  <span>{college.location}, {college.country}</span>
                  <span>{college.type}</span>
                </div>

                <div className="tag-row">
                  {college.programs.map((program) => (
                    <span key={program}>{program}</span>
                  ))}
                </div>

                <div className="college-card-footer">
                  <span className="college-footer-note">{college.established}</span>
                  <Link
                    className="text-link"
                    to={`/colleges?category=${encodeURIComponent(college.category)}&q=${encodeURIComponent(college.name)}`}
                  >
                    View profile
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="section-heading left">
          <p className="eyebrow">Top exams</p>
          <h2>Quickly compare key entrance exams and decide what to prepare for next.</h2>
        </div>
        <div className="exam-filter-row">
          {examStreams.map((stream) => (
            <button
              className={activeExamStream === stream ? 'stream-pill active' : 'stream-pill'}
              key={stream}
              onClick={() => setActiveExamStream(stream)}
              type="button"
            >
              {stream}
            </button>
          ))}
        </div>
        <div className="exam-card-grid">
          {filteredExams.map((exam) => (
            <article className="exam-card" key={exam.slug}>
              <div className="exam-card-head">
                <span>{exam.examLevel}</span>
                <strong>{exam.examDate}</strong>
              </div>
              <h3>{exam.title}</h3>
              <p>{exam.acceptedFor}</p>
              <div className="meta-list">
                <span>{exam.stream}</span>
                <span>{exam.format}</span>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="why-grid">
          <div className="section-heading left">
            <p className="eyebrow">Student-first guidance</p>
            <h2>From discovery to admission, SG Education Solution keeps the process easier to understand and easier to act on.</h2>
          </div>
          <div className="feature-grid">
            {whyChooseCards.map((point) => {
              const Icon = point.icon

              return (
                <article className="feature-card" key={point.title}>
                  <span className="icon-badge feature">
                    <Icon size={15} />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="news-layout">
          <article className="news-feature">
            <div className="news-feature-head">
              <Newspaper size={18} />
              <span>News and more</span>
            </div>
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <Link className="text-link" to={`/blog/${blogPosts[0].slug}`}>
              Read the full article
            </Link>
          </article>
          <div className="news-list">
            {blogPosts.slice(1).map((post) => (
              <Link className="news-list-item" key={post.slug} to={`/blog/${post.slug}`}>
                <span>{post.category}</span>
                <strong>{post.title}</strong>
                <p>{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading left">
          <p className="eyebrow">Application form</p>
          <h2>Ask questions, shortlist faster, and get personal guidance for your next step.</h2>
        </div>
        <InquiryForm
          subtitle="Tell us what you want to study and our team will help you plan the right path."
          title="Need guidance to select the right course or college?"
        />
      </AnimatedSection>
    </>
  )
}

export default HomePage
