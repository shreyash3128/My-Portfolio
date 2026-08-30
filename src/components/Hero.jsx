import React from 'react'

const Hero = ({name, role}) => {
  return (
      <section>
          <h1>Hi, I'm {name}</h1>
          <p>{role}</p>
      </section>
  )
}

export default Hero