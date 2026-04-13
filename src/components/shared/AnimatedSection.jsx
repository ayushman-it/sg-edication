import { motion } from 'framer-motion'

function AnimatedSection({ children, className = '', delay = 0, id }) {
  const MotionSection = motion.section

  return (
    <MotionSection
      animate={{ opacity: 1, y: 0 }}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </MotionSection>
  )
}

export default AnimatedSection
