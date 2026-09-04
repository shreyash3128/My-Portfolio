import React from 'react'

const ProjectCard = ({title, description, technologies}) => {
  return (
    <div className="card h-100">
      <div className="card-body">
          <h3 className="card-title">
            {title}
          </h3>
          <p className="card-text">
            {description}
          </p>
          <div className="d-flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="badge text-bg-dark"
              >
                {technology}
              </span>
            ))}
          </div>
      </div>
    </div>
    // <div className="card p-3 mb-3">
    //   <div className="card-body">
    //     <h3 className="card-title">{title}</h3>

    //     <p className="card-text">
    //       {description}
    //     </p>

    //     <div className="d-flex flex-wrap gap-2">
    //       {technologies.map((technology) => (
    //         <span
    //           key={technology}
    //           className="badge text-bg-dark"
    //         >
    //           {technology}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProjectCard