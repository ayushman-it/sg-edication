const PHP_API_BASE = import.meta.env.VITE_PHP_API_BASE || 'https://api.sgeducationsolution.com'

const phpEndpoints = {
  globalSearch: `${PHP_API_BASE}/search`,
  enquiry: `${PHP_API_BASE}/enquiry`,
  callback: `${PHP_API_BASE}/callback`,
  newsletter: `${PHP_API_BASE}/newsletter`,
  countries: `${PHP_API_BASE}/countries`,
  colleges: `${PHP_API_BASE}/colleges`,
  courses: `${PHP_API_BASE}/courses`,
  blogs: `${PHP_API_BASE}/blogs`,
}

async function simulateSubmission(payload) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ok: true, payload }), 650)
  })
}

export { phpEndpoints, simulateSubmission }
