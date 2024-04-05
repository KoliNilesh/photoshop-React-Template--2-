import React from 'react'

function About() {
  return (
    <>

        <div className="w3-content w3-justify w3-text-grey w3-padding-64 " id="about">
        <h2 className="w3-text-light-grey">My Name</h2>
        <hr style={{width:"200px"}} className="w3-opacity"/>
        <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Photography</p>
        <div className="w3-white">
        <div className="w3-dark-grey" style={{height:"28px",width:"95%"}}></div>
        </div>
        <p className="w3-wide">Web Design</p>
        <div className="w3-white">
        <div className="w3-dark-grey" style={{height:"28px",width:"85%"}}></div>
        </div>
        <p className="w3-wide">Photoshop</p>
        <div className="w3-white">
        <div className="w3-dark-grey" style={{height:"28px",width:"80%"}}></div>
        </div><br/>
        
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
        <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span><br/>
            Partners
        </div>
        <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span><br/>
            Projects Done
        </div>
        <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span><br/>
            Happy Clients
        </div>
        <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span><br/>
            Meetings
        </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
        <i className="fa fa-download"></i> Download Resume
        </button>
        
        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div className="w3-row-padding" style={{margin:"0 -16px"}}>
        <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">5GB Storage</li>
            <li className="w3-padding-16">Mail Support</li>
            <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
            </li>
            </ul>
        </div>

        <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">50GB Storage</li>
            <li className="w3-padding-16">Endless Support</li>
            <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
            </li>
            </ul>
        </div>
        
        </div>
        </div>    
        
  
    </>
  )
}

export default About