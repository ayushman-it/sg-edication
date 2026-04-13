import { useEffect } from 'react'

function upsertMeta(attribute, key, content) {
  if (!content) {
    return
  }

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) {
    return
  }

  let tag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  tag.setAttribute('href', href)
}

function upsertStructuredData(id, data) {
  let tag = document.head.querySelector(`#${id}`)

  if (!tag) {
    tag = document.createElement('script')
    tag.id = id
    tag.type = 'application/ld+json'
    document.head.appendChild(tag)
  }

  tag.textContent = JSON.stringify(data)
}

function Seo({ canonicalPath, description, image, jsonLd, keywords, title, type = 'website' }) {
  useEffect(() => {
    const canonicalUrl = canonicalPath ? `${window.location.origin}${canonicalPath}` : window.location.href

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:site_name', 'SG Education Solution')
    upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertLink('canonical', canonicalUrl)

    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`
      upsertMeta('property', 'og:image', fullImageUrl)
      upsertMeta('name', 'twitter:image', fullImageUrl)
    }

    if (jsonLd) {
      upsertStructuredData('seo-structured-data', jsonLd)
    }
  }, [canonicalPath, description, image, jsonLd, keywords, title, type])

  return null
}

export default Seo
