import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileCheck2,
  GraduationCap,
  MapPinned,
  MessageSquareMore,
  Quote,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import useEnquiryModal from '../components/shared/useEnquiryModal'

const trustedMarks = Array.from({ length: 4 }, (_, index) => ({
  id: `about-trust-${index + 1}`,
  label: 'SG Education Solution - Explore Indian & International Colleges',
}))

const admissionFlow = [
  {
    title: 'Connect with our Counsellor',
    description: 'Get 1 on 1 personal counsellor support for your desired courses and admission goals.',
    icon: MessageSquareMore,
  },
  {
    title: 'Select State & College',
    description: 'We work with institutions across multiple states to help you target the right colleges.',
    icon: MapPinned,
  },
  {
    title: 'Get your Detailed Report',
    description: 'Our team shares a detailed report on colleges, courses, admission requirements, and fees.',
    icon: BookOpenText,
  },
  {
    title: 'Hassle Free Documentation Process',
    description: 'We support paperwork, verification, submissions, and seat allocation coordination end to end.',
    icon: FileCheck2,
  },
  {
    title: 'Get Confirmed Admission Assurance',
    description: "Get clear guidance, honest support, and a full refund if you're not admitted to the college.",
    icon: BadgeCheck,
  },
]

const admissionHighlights = [
  {
    title: 'Hassle-free Direct Admission',
    description: 'We leverage vacant institute-level seats, management quota, and NRI quota to secure admission even in competitive scenarios.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Counselling',
    description: 'With years of experience in education consultancy, we provide cost-effective, personalized guidance and expert counselling.',
    icon: MessageSquareMore,
  },
  {
    title: 'Smooth Admission Process',
    description: 'We assist with career counseling, course selection, documentation, and final admission for a stress-free experience.',
    icon: FileCheck2,
  },
  {
    title: 'Secure Your Future',
    description: 'Expert guidance for top admissions in India and abroad helps students move forward with confidence.',
    icon: GraduationCap,
  },
]

function AboutPage() {
  const { openEnquiryModal } = useEnquiryModal()

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
            <p className="eyebrow">About Us</p>
            <h1>SG Education Solutions</h1>
            <p className="about-hero-description">
              We started this organization with the goal of helping students who face challenges in choosing the right career path or securing admission into their dream colleges.
            </p>
            <p className="about-hero-description">
              For the past 12 years, we&apos;ve been dedicated to guiding students toward the right educational choices and assisting them in getting admissions to their desired institutions. Our mission is to simplify the admission process and support students in building a successful future.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={openEnquiryModal} type="button">
                Talk to Admission Expert
              </button>
              <Link className="secondary-button" to="/direct-admission">
                Admission Steps
              </Link>
            </div>
          </div>

          <div className="about-hero-panel">
            <div className="about-hero-brand">
              <img alt="SG Education Solution logo" src="/sg-logo.png" />
              <div>
                <strong>#EkKadamNayiRaahKiAur</strong>
                <p>Trusted guidance for Indian and international college discovery.</p>
              </div>
            </div>

            <div className="about-trusted-grid">
              {trustedMarks.map((item) => (
                <article className="about-trusted-card" key={item.id}>
                  <img alt="SG Education Solution mark" src="/sg-logo.png" />
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="content-section">
        <div className="about-story-layout">
          <div className="section-heading left">
            <p className="eyebrow">Your Admission Expert</p>
            <h2>Looking for direct admission to top colleges in India? SG Education Solutions has you covered.</h2>
            <p>
              We work as a trusted admission partner for students who need guidance, clarity, and reliable support while planning their next academic step.
            </p>
          </div>

          <div className="about-story-stats">
            <article>
              <strong>12+ Years</strong>
              <p>Dedicated support for students choosing the right career path and college.</p>
            </article>
            <article>
              <strong>India + Abroad</strong>
              <p>Guidance for Indian institutions as well as international opportunities.</p>
            </article>
            <article>
              <strong>Admission-first Support</strong>
              <p>Counselling, college shortlisting, documentation, and final admission assistance.</p>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="about-steps-shell">
          <div className="section-heading">
            <p className="eyebrow">Seamless Direct Admission Process</p>
            <h2>Simple steps to follow for a smoother admission journey.</h2>
          </div>

          <div className="about-steps-grid">
            {admissionFlow.map((step, index) => {
              const Icon = step.icon

              return (
                <article className="about-step-card" key={step.title}>
                  <span className="about-step-count">{String(index + 1).padStart(2, '0')}</span>
                  <span className="icon-badge feature about-step-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section">
        <div className="about-admission-band">
          <div className="about-admission-copy">
            <p className="eyebrow">Admission Expert</p>
            <h2>Your trusted admission partner for top colleges in India.</h2>
            <p>
              SG Education Solutions focuses on reducing confusion and making the direct admission process more manageable for students and families.
            </p>
            <button className="primary-button" onClick={openEnquiryModal} type="button">
              Contact Now
            </button>
          </div>

          <div className="about-admission-grid">
            {admissionHighlights.map((item) => {
              const Icon = item.icon

              return (
                <article className="about-highlight-card" key={item.title}>
                  <span className="icon-badge feature">
                    <Icon size={15} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <div className="section-heading">
          <p className="eyebrow">Our Mission & Vision</p>
          <h2>We guide students toward a successful academic and professional future.</h2>
          <p>At SG Education Solutions, every interaction is designed to make the next step clearer, more confident, and more achievable.</p>
        </div>

        <div className="about-purpose-grid">
          <article className="about-purpose-card">
            <div className="about-purpose-head">
              <Quote size={18} />
              <h3>Our Mission</h3>
            </div>
            <p>
              Empowering academic aspirations, we are committed to guiding and supporting students on their educational journey. Through personalized consultancy, we strive to unlock doors to diverse opportunities, fostering a future where every learner realizes their full potential.
            </p>
          </article>

          <article className="about-purpose-card">
            <div className="about-purpose-head">
              <BriefcaseBusiness size={18} />
              <h3>Our Vision</h3>
            </div>
            <p>
              We envision a world where each student discovers their unique path to success. At SG EDUCATION SOLUTION, we strive to make learning an exhilarating and customized experience that unlocks a plethora of opportunities. We aspire to see a community of individuals who have the confidence to shape their destinies and positively impact the world through education.
            </p>
          </article>
        </div>

        <div className="content-end-link">
          <Link className="text-link" to="/contact">
            Start your admission discussion
            <ArrowRight size={14} />
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}

export default AboutPage
