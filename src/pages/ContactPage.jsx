import AnimatedSection from '../components/shared/AnimatedSection'
import InquiryForm from '../components/shared/InquiryForm'
import PageHero from '../components/shared/PageHero'
import { siteMeta } from '../data/siteData'

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        description="Reach our team for counselling, callbacks, and admission support."
        eyebrow="Contact"
        primaryCta={{ label: 'Send enquiry below', href: '/contact' }}
        secondaryCta={{ label: 'View direct admission', href: '/direct-admission' }}
        title="Students should never wonder how to get help."
      >
        <div className="hero-panel-stack">
          <article>
            <span>Call us</span>
            <strong>{siteMeta.phone}</strong>
          </article>
          <article>
            <span>Email support</span>
            <strong>{siteMeta.email}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <InquiryForm
          subtitle="Share your details and our counselling team will reach out with the next steps."
          title="Speak with the SG Education Solution team"
        />
      </AnimatedSection>
    </>
  )
}

export default ContactPage
