import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import { admissionsSteps, countries } from '../data/siteData'

function AdmissionPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Direct Admission' }]}
        description="A direct admission journey with clear steps, counselling reassurance, and personal support."
        eyebrow="Direct Admission"
        primaryCta={{ label: 'Submit enquiry', href: '/contact' }}
        secondaryCta={{ label: 'Browse countries', href: '/countries' }}
        title="Start with a profile review and move forward with a real application plan."
      >
        <div className="hero-panel-stack">
          {countries.slice(0, 3).map((country) => (
            <article key={country.slug}>
              <span>{country.name}</span>
              <strong>{country.highlight}</strong>
            </article>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Admission roadmap</p>
          <h2>Students know what happens next at every stage.</h2>
        </div>
        <div className="timeline-list">
          {admissionsSteps.map((step, index) => (
            <article className="timeline-item" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="content-section muted">
        <InquiryForm
          subtitle="Share your goals and our team will guide you through the direct admission process."
          title="Request direct admission assistance"
        />
      </AnimatedSection>
    </>
  )
}

export default AdmissionPage
