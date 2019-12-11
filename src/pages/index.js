import React from "react"

import SEO from "../components/seo"
import "./page-style/index.css"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="blue-container">
      <div className="container">
      <Header />
        <section>
          <div>
            <img src="\PSCA_FULL_ColorLogo_BBG.jpg" alt="Company Logo" className="logo"/>
            <h1>Waxahachie's Premier Skin Care Academy</h1>
            <p className="subhead">Waxahachie's Premier Skin Care Academy</p>
            <button className="cta"><a href="#">Begin Your Journey</a></button>
          </div>
          <div>
            <button className="hide-mobile">Course Offerings</button>
            <p className="why-psca">The Academy was designed by utilizing over 20 years of experience in the industry. Training and working at Ogle, Paul Mitchell and Aveda, and setting up the Esthetics program at Dallas Skin Institute allowed the opportunity to work with numerous product lines, textbooks and teaching platforms. Valuable knowledge was also gained by listening to students input on what they enjoyed, and what they felt was missing in their education. That was the creative concept behind why this Academy was started, and what is the heart of Professional Skin Care Academy.</p>
          </div>
          <p className="scroll hide-mobile show-desktop">Put Scroll icon here</p>
        </section>
      </div>
    </div>
    <div className="white-container">
      <div className="container">
        <p className="about-psca">Professional Skin Care Academy is located in Waxahachie, Texas and offers both full and part time class schedules for aspiring estheticians and educators. Class size is limited to 12 students which allows for a personalized learning environment. The curriculum is approved by the Texas Department of Licensing and Regulation, and completion of the program will prepare students to test for the State License. In as little as 6 months, graduates will be starting exciting new careers as licensed estheticians. To learn more, visit our courses page or feel free to contact us.</p>
        <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="FrontPic.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="classroomsize.jpeg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="TablePicsSize.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="enterHall.jpg" alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="Tablesize.jpg" alt="Fifth slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-1" role="button"
                data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-1" role="button"
                data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
          </div>
      </div> 
    </div>
    <Footer />
  </div>
)

export default IndexPage
