import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import { phpEndpoints } from '../services/api'

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        description="A dedicated contact experience for callbacks, counselling, and student enquiries, with obvious backend placeholders for PHP integration."
        eyebrow="Contact"
        primaryCta={{ label: 'Send enquiry below', href: '/contact' }}
        secondaryCta={{ label: 'View direct admission', href: '/direct-admission' }}
        title="Students should never wonder how to get help."
      >
        <div className="hero-panel-stack">
          <article>
            <span>Lead endpoint</span>
            <strong>{phpEndpoints.enquiry}</strong>
          </article>
          <article>
            <span>Callback endpoint</span>
            <strong>{phpEndpoints.callback}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <InquiryForm
          subtitle="This page is already structured like a production contact form and can be connected to PHP APIs later."
          title="Speak with the SG Education Solution team"
        />
      </AnimatedSection>
    </>
  )
}

export default ContactPage
