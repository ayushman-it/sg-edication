import { Link, Navigate, useParams } from 'react-router-dom'
import AnimatedSection from '../components/shared/AnimatedSection'
import PageHero from '../components/shared/PageHero'
import { blogPosts } from '../data/siteData'

function BlogDetailPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate replace to="/blog" />
  }

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blogs', href: '/blog' },
          { label: post.title },
        ]}
        description={post.excerpt}
        eyebrow={post.category}
        primaryCta={{ label: 'Back to blog', href: '/blog' }}
        secondaryCta={{ label: 'Ask a counsellor', href: '/contact' }}
        title={post.title}
      >
        <div className="hero-panel-stack">
          <article>
            <span>Published</span>
            <strong>{post.date}</strong>
          </article>
          <article>
            <span>Read time</span>
            <strong>{post.readTime}</strong>
          </article>
        </div>
      </PageHero>

      <AnimatedSection className="content-section">
        <article className="article-layout">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <div className="content-end-link">
          <Link className="text-link" to="/contact">
            Want help applying this advice to your profile?
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}

export default BlogDetailPage
