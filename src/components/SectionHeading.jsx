
function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        <span className="eyebrow-label">{eyebrow}</span>
      </p>

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-desc">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;