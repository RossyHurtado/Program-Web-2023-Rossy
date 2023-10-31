import React from 'react'
import './Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='footer-section'>
        <h3>Let's talk</h3>
        <div className='subtitle'>3levatecollective@gmail.com</div>
      </div>
      <div className='footer-section'>
        <h3>Follow Us</h3>
        <div className='subtitle'>
          <p>Behance</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className='footer-section'>
        <h3>© All rights reserved</h3>
        <div className='subtitle'>the colective you have been looking for</div>
      </div>
    </footer>
  )
}
