import React from 'react'
import './MainContainer.css'
import Banner from '../img/1.jpg'


function MainContainer() {
  return (
    <div className="mainContainer">
       <div className="left">
         <div className="banner" style={{ 
            background: `url(${Banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
           <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander Vernof</p>
            <div className="bid">
              <a href="#" className="button1"> Bid Now </a>
              <p>Ending In <span>2d:15h:20m</span></p>
            </div>
           </div>
         </div>
       </div>
       <div className="right"></div>
    </div>
  )
}

export default MainContainer