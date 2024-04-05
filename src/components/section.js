import React from 'react'

function section() {
  return (
    <>
      
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr style={{width:"200px"}} className="w3-opacity" />

    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
    </div><br/>
    <p>Let's get in touch. Send me a message:</p>

    <form action="/action_page.php" target="_blank">
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
      <p>
        <button className="w3-button w3-light-grey w3-padding-large" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  </div>
  
    </>
  )
}

export default section