import React from 'react'

export function Footer () {
  const footerStyle = {
    fontfamily: 'sans-serif',
    color: ' #e0e8ef'

  }

  const imgStyle = {
    height: '55vh'
  }

  return (
    <>

      <footer style={footerStyle}>
        <p>Rossy Hurtado - A00372572 </p>
        <p>All right reserverd®</p>
      </footer>
      <div style={imgStyle}>
        <img style={imgStyle} src='./src/assets/wave.png' alt='Img' />
      </div>

    </>

  )
}
