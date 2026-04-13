function PageSkeleton() {
  return (
    <div className="page-skeleton" aria-hidden="true">
      <div className="page-skeleton-hero">
        <div className="page-skeleton-copy">
          <div className="skeleton-pill shimmer" />
          <div className="skeleton-title shimmer" />
          <div className="skeleton-title short shimmer" />
          <div className="skeleton-row shimmer" />
          <div className="skeleton-row short shimmer" />
          <div className="page-skeleton-actions">
            <div className="skeleton-button shimmer" />
            <div className="skeleton-button light shimmer" />
          </div>
        </div>
        <div className="page-skeleton-panel shimmer" />
      </div>

      <div className="page-skeleton-grid">
        <div className="skeleton-screen-card shimmer" />
        <div className="skeleton-screen-card shimmer" />
        <div className="skeleton-screen-card shimmer" />
        <div className="skeleton-screen-card shimmer" />
      </div>
    </div>
  )
}

export default PageSkeleton
