import { Link, useSearchParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { blogPosts } from '../data/siteData'
import { matchesSearch } from '../utils/helpers'

function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const filteredPosts = blogPosts.filter((post) =>
    matchesSearch(`${post.title} ${post.category} ${post.excerpt}`, query),
  )

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]}
        description="Browse student-friendly articles, admission updates, and planning tips in one place."
        eyebrow="Insights and Resources"
        primaryCta={{ label: 'Read latest posts', href: '/blog' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
        title="Content that supports decision-making instead of adding noise."
      >
        <div className="hero-panel-stack">
          <article>
            <span>Style</span>
            <strong>Editorial and clean</strong>
          </article>
          <article>
            <span>Content</span>
            <strong>Guides, updates, and admission tips</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <div className="filter-toolbar">
          <div className="section-heading left">
            <p className="eyebrow">Knowledge hub</p>
            <h2>Students can browse articles by need, not just by date.</h2>
          </div>
          <input
            className="toolbar-input"
            onChange={(event) => setSearchParams(event.target.value ? { q: event.target.value } : {})}
            placeholder="Search blog topics..."
            value={query}
          />
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="meta-list">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link className="text-link" to={`/blog/${post.slug}`}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  )
}

export default BlogPage
