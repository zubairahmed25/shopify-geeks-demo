import React from 'react'
import { Link } from 'react-router-dom'

function SharePost() {
  return (
    <>
     <div className="share-area">
        <div className="row">
          <div className="col-md-6 text-md-start text-center"><h5>Share Your Timeline :</h5></div>
          <div className="col-md-6 text-md-end text-center">
            <ul className="share-icon d-flex justify-content-md-end justify-content-center">
              <li><Link  rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" to={"#"}>fb</Link></li>
              <li><Link  rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" to={"#"}>tw</Link></li>
              <li><Link  rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" to={"#"}>in</Link></li>
              <li><Link  rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank" to={"#"}>pr</Link></li>
            </ul>
          </div>
        </div>
      </div>   
    </>
  )
}

export default SharePost