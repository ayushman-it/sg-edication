import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SearchDropdown({ isOpen, onClose, query, results }) {
  const MotionDiv = motion.div

  return (
    <AnimatePresence>
      {isOpen ? (
        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          className="search-dropdown"
          exit={{ opacity: 0, y: -12 }}
          initial={{ opacity: 0, y: -12 }}
        >
          <div className="dropdown-header">
            <span>Search results</span>
            <small>{results.length} matches</small>
          </div>
          {results.length ? (
            results.map((item) => (
              <Link
                className="search-result"
                key={`${item.type}-${item.label}`}
                onClick={onClose}
                to={item.path}
              >
                <span>{item.type}</span>
                <strong>{item.label}</strong>
                <p>{item.description}</p>
              </Link>
            ))
          ) : (
            <div className="search-empty">
              <strong>No instant matches</strong>
              <p>Try another keyword or press enter to open full search for "{query}".</p>
            </div>
          )}
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  )
}

export default SearchDropdown
