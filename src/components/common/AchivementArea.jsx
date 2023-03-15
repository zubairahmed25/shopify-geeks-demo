import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import CountUp from 'react-countup';
import "react-modal-video/css/modal-video.css";
function AchivementArea() {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="achievment-section pb-120">
        <div className="container position-relative">
          <img src={process.env.PUBLIC_URL + "/images/icon/dotted.svg"} className="dotted-circle" alt="images" />
          <div className="achievment-section-wrapper bg--primary">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-7">
                <div className="achivment-box-wrap">
                  <div className="achievment-box gap-4">
                    <div className="single-counter">
                      <div className="counter-icon">
                        <img src={process.env.PUBLIC_URL + "/images/icon/ach3.svg"} alt="images" />
                      </div>
                      <div className="counter-text counter-item">
                        <h3 className="odometer" data-odometer-final={40}><CountUp className="odometer" end={109} delay={2} duration={5}/></h3>
                        <p>Expert People</p>
                      </div>
                    </div>
                    <div className="single-counter">
                      <div className="counter-icon">
                        <img src={process.env.PUBLIC_URL + "/images/icon/ach2.svg"} alt="images" />
                      </div>
                      <div className="counter-text counter-item">
                      <h3 className="odometer" data-odometer-final={40}><CountUp className="odometer" end={3500} delay={2} duration={5}/></h3>
                        <p>Satisfied Client</p>
                      </div>
                    </div>
                    <div className="single-counter">
                      <div className="counter-icon">
                        <img src={process.env.PUBLIC_URL + "/images/icon/ach1.svg"} alt="images" />
                      </div>
                      <div className="counter-text counter-item">
                      <h3 className="odometer" data-odometer-final={500}><CountUp className="odometer" end={500} delay={2} duration={5}/></h3>
                        <p>Downloaded</p>
                      </div>
                    </div>
                    <div className="single-counter">
                      <div className="counter-icon">
                        <img src={process.env.PUBLIC_URL + "/images/icon/ach4.svg"} alt="images" />
                      </div>
                      <div className="counter-text counter-item">
                      <h3 className="odometer" data-odometer-final={40}><CountUp className="odometer" end={800} delay={2} duration={5}/></h3>
                        <p>Unique Product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-8">
                <div className="video-area">
                  <div style={{cursor:"pointer"}} className="video-play">
                    <div  onClick={() => setOpen(true)} className="video-open video-icon"><i className="bx bx-play" /></div>
                  </div>
                  <img src={process.env.PUBLIC_URL + "/images/bg/vdobg.png"} alt="images" />
                </div>
                <div className="video-text">
                  <p>We Help Videos to Create Branding Agency Amazing Experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment> 
    </>
  )
}

export default AchivementArea