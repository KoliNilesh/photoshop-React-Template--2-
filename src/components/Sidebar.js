import React from 'react'

function Sidebar() {
  return (
    <>
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-black">
        
        {/* <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{width:"100%"}} /> */}
            <img src="./images/logo.png" style={{width:"100%", borderRadius: "50%",alignItems: "center"}} />
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-home w3-xxlarge"></i>
                <p>HOME</p>
            </a>
            <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-user w3-xxlarge"></i>
                <p>ABOUT</p>
            </a>
            <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-eye w3-xxlarge"></i>
                <p>PHOTOS</p>
            </a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-envelope w3-xxlarge"></i>
                <p>CONTACT</p>
            </a>
        </nav>
    </>
  )
}

export default Sidebar