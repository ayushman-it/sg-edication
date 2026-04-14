import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { MessageCircle, X } from 'lucide-react'
import { colleges, courses, nationalDestinations, siteMeta } from '../../data/siteData'
import { simulateSubmission } from '../../services/api'
import { assetPath } from '../../utils/assets'
import EnquiryModalContext from './EnquiryModalContext'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  course: '',
  city: '',
  abroadInterest: 'No',
}

const courseOptions = courses.map((course) => course.title)
const cityOptions = [...new Set([...nationalDestinations.map((city) => city.label), ...colleges.map((college) => college.location)])]
const whatsappHref = `https://wa.me/${siteMeta.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Hello SG Education Solution, I want help finding the right college and course.',
)}`

function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    await simulateSubmission(formData)
    setStatus('success')
  }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className="enquiry-modal-backdrop" onClick={onClose} role="presentation">
      <div
        aria-modal="true"
        className="enquiry-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button aria-label="Close enquiry form" className="enquiry-modal-close" onClick={onClose} type="button">
          <X size={18} />
        </button>

        <div className="enquiry-modal-grid">
          <aside className="enquiry-modal-aside">
            <div className="enquiry-modal-brand">
              <img alt="SG Education Solution" className="enquiry-modal-logo" src={assetPath('sg-logo.png')} />
              <span className="enquiry-modal-chip">GET STARTED</span>
            </div>
            <div className="enquiry-modal-copy">
              <p className="eyebrow">Ready to find your</p>
              <h2>dream college</h2>
              <p>
                Fill in the basic details. Our counsellor will get in touch with you and help
                shortlist the right course, city, and admission path.
              </p>
            </div>
            <div className="enquiry-modal-points">
              <article>
                <strong>Personal guidance</strong>
                <p>Talk through colleges, courses, and next steps with a real counsellor.</p>
              </article>
              <article>
                <strong>India + abroad options</strong>
                <p>Compare local and international pathways from the same enquiry flow.</p>
              </article>
            </div>
          </aside>

          <section className="enquiry-modal-content">
            <div className="enquiry-modal-head">
              <p className="eyebrow">Welcome to SG EDUCATION SOLUTION</p>
              <h3>We need basic details first to continue.</h3>
            </div>

            <form className="enquiry-modal-form" onSubmit={handleSubmit}>
              <div className="modal-form-grid">
                <label className="field-block">
                  <span>Name*</span>
                  <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                  />
                </label>

                <label className="field-block">
                  <span>Enter Email Address*</span>
                  <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    type="email"
                    value={formData.email}
                  />
                </label>

                <label className="field-block field-block-wide">
                  <span>Mobile Number *</span>
                  <div className="phone-input-group">
                    <div className="phone-prefix">+91 (India)</div>
                    <input
                      name="phone"
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      required
                      value={formData.phone}
                    />
                  </div>
                </label>

                <label className="field-block">
                  <span>Select a Course*</span>
                  <select name="course" onChange={handleChange} required value={formData.course}>
                    <option value="">Select Course</option>
                    {courseOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field-block">
                  <span>Select Your City *</span>
                  <select name="city" onChange={handleChange} required value={formData.city}>
                    <option value="">Select City</option>
                    {cityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="field-block">
                <span>Are You Interested in Abroad? *</span>
                <div className="choice-row" role="radiogroup" aria-label="Interested in abroad">
                  {['Yes', 'No'].map((option) => (
                    <label
                      className={formData.abroadInterest === option ? 'choice-pill active' : 'choice-pill'}
                      key={option}
                    >
                      <input
                        checked={formData.abroadInterest === option}
                        name="abroadInterest"
                        onChange={handleChange}
                        type="radio"
                        value={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <button className="primary-button enquiry-submit" disabled={status === 'loading'} type="submit">
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>

              {status === 'success' ? <p className="success-copy">Your enquiry has been received. Our team will contact you soon.</p> : null}

              <div className="modal-divider">
                <span>OR</span>
              </div>

              <a className="whatsapp-button" href={whatsappHref} rel="noreferrer" target="_blank">
                <MessageCircle size={16} />
                Enquiry on WhatsApp
              </a>
            </form>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  )
}

function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [instanceKey, setInstanceKey] = useState(0)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)

  useEffect(() => {
    if (hasAutoOpened) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setInstanceKey((current) => current + 1)
      setIsOpen(true)
      setHasAutoOpened(true)
    }, 10000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [hasAutoOpened])

  const value = useMemo(
    () => ({
      openEnquiryModal: () => {
        setHasAutoOpened(true)
        setInstanceKey((current) => current + 1)
        setIsOpen(true)
      },
      closeEnquiryModal: () => setIsOpen(false),
    }),
    [],
  )

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal key={instanceKey} isOpen={isOpen} onClose={value.closeEnquiryModal} />
    </EnquiryModalContext.Provider>
  )
}

export { EnquiryModalProvider }
