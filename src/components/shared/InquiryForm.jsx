import { MessageCircle } from 'lucide-react'
import { siteMeta } from '../../data/siteData'
import useEnquiryModal from './useEnquiryModal'

const whatsappHref = `https://wa.me/${siteMeta.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Hello SG Education Solution, I want help with college and course selection.',
)}`

function InquiryForm({ title, subtitle, compact = false }) {
  const { openEnquiryModal } = useEnquiryModal()

  return (
    <div className={compact ? 'inquiry-card inquiry-card-cta compact' : 'inquiry-card inquiry-card-cta'}>
      <div className="inquiry-card-shell">
        <div className="inquiry-card-copy">
          <p className="eyebrow">Enquiry support</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="inquiry-card-actions">
          <button className="primary-button" onClick={openEnquiryModal} type="button">
            Send enquiry
          </button>
          <a className="whatsapp-button muted" href={whatsappHref} rel="noreferrer" target="_blank">
            <MessageCircle size={16} />
            Enquiry on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default InquiryForm
