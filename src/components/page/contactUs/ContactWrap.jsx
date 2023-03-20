import React, {useState} from "react";
import { Link } from "react-router-dom";

function ContactWrap() {
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
  });
  let name,value;
  const postUserData=(event)=>{
    name = event.target.name;
    value=event.target.value;
    setUserData({...userData,[name]:value})
  };
  const submitData = async (event)=>{
    event.preventDefault();
    const {name,email,phone,subject,message}=userData;
    if(name && email && phone && subject && message){
    const res = fetch("https://shopify-geeks-default-rtdb.firebaseio.com/userDataRecords.json",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message
      }),
    }
    );
    if (res) {
      setUserData({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
      });
      alert("Data stored");
    }else{
      alert("plz fill the data")
    }
  }else{
    alert("plz fill the data")
    }
  };
  const scrolltop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="contact-section pt-120 pb-120">
        <div className="container">
        <div className="row d-flex justify-content-lg-end justify-content-center">
            <div className="col-md-8 text-center">
              <div
                className="section-title wow animate fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Get In Touch.</h2>
              </div>
            </div>
          </div>  
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div
                className="section-card contact-section-card wow animate fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <h2>Experts Advice</h2>
                <p>
                  Explore Select, Our Premimum Solu.. tion For Branding &
                  Business.
                </p>
                <Link
                  onClick={scrolltop}
                  to={`${process.env.PUBLIC_URL}/team`}
                  className="eg-btn hover-btn sectoin-card-btn"
                >
                  <span>
                    Location Map
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon/arrow-servc.svg"
                      }
                      alt="icons"
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-center">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form"
              >
                <div className="row" method="POST">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input 
                        type="text" 
                        required 
                        placeHolder="Your Name :" 
                        name="name"
                        value={userData.name}
                        onChange={postUserData}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        required
                        placeHolder="Enter Your Email :"
                        name="email"
                        value={userData.email}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        required
                        placeHolder="Phone Number :"
                        name="phone"
                        value={userData.phone}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input 
                        type="text" 
                        required 
                        placeHolder="Subject :" 
                        name="subject"
                        value={userData.subject}
                        onChange={postUserData}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <textarea 
                        placeHolder="Enter Your Message"
                        name="message"
                        value={userData.message}
                        onChange={postUserData}></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      class="eg-btn hover-btn comment-form-btn"
                      onClick={submitData}
                    >
                      <span>
                        Send Now
                        <svg
                          width="51"
                          height="13"
                          viewBox="0 0 51 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M44 1.45465V6.5V11.5454C44 11.7194 44.2068 11.8104 44.3351 11.6928L50 6.5L44.3351 1.30722C44.2068 1.18963 44 1.28063 44 1.45465Z" />
                          <path d="M1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM44.3351 1.30722L44.673 0.938639L44.673 0.938639L44.3351 1.30722ZM50 6.5L50.3378 6.86858L50.7399 6.5L50.3378 6.13142L50 6.5ZM44.3351 11.6928L44.673 12.0614L44.673 12.0614L44.3351 11.6928ZM1 7H44V6H1V7ZM44.5 6.5V1.45465H43.5V6.5H44.5ZM43.9972 1.67579L49.6621 6.86858L50.3378 6.13142L44.673 0.938639L43.9972 1.67579ZM49.6621 6.13142L43.9972 11.3242L44.673 12.0614L50.3378 6.86858L49.6621 6.13142ZM44.5 11.5454V6.5H43.5V11.5454H44.5ZM43.9972 11.3242C44.1897 11.1478 44.5 11.2843 44.5 11.5454H43.5C43.5 12.1544 44.224 12.4729 44.673 12.0614L43.9972 11.3242ZM44.5 1.45465C44.5 1.71568 44.1897 1.85218 43.9972 1.67579L44.673 0.938639C44.224 0.527072 43.5 0.845576 43.5 1.45465H44.5Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="row pt-120 g-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="eg-card contact-signle hover-btn">
                <span></span>
                <div className="icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="text">
                  <h3>Location</h3>
                  <h4>168/170, Ave 01,Old York Drive</h4>
                  <h5>Dhaka, Bangladesh</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="eg-card contact-signle hover-btn">
                <span></span>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <a href="tel:+880171-770000">
                    <h4>+880171-770000</h4>
                  </a>
                  <a href="tel:+8801761111456">
                    <h5>+8801761111456</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="eg-card contact-signle hover-btn">
                <span></span>
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <a href="mailto:support@example.com">
                    <h4>support@example.com</h4>
                  </a>
                  <a href="mailto:info@example.com">
                    <h5>info@example.com</h5>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        
        </div>
      </div>
    </>
  );
}

export default ContactWrap;
