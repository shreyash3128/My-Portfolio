import React from 'react'

const SectionHeading = ({title, subtitle}) => {
  return (
   <div className="text-center mb-4">
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
   </div>
  )
}

export default SectionHeading