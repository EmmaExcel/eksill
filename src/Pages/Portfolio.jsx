import React from "react";
import "./Portfolio.css";

import top from "../images/whatsapp/Rectangle18.png";
import bottom from "../images/whatsapp/Rectangle19.png";
import right from "../images/whatsapp/Rectangle20.png";
import rbottom from "../images/whatsapp/Rectangle21.png";
import left from "../images/whatsapp/Rectangle22.png";
import round from '../images/Group88.png'
import eclipse from '../images/logo/Ellipse40.png'
import rating from '../images/logo/Group81.png'
import arrow from '../images/logo/arrow.png'
import arrowleft from '../images/logo/Group68.png'

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <div className="box-back">
          <p className="build">
            Build a <span>Portfolio</span> with us and get
          </p>

          <div className="hired">
            <span>HIRED!!!</span>
            <div className="hired-paragraph">
              <p>
               
                product design describes the process of imagining, creating, and
                iterating products that solve users...
              </p>
            </div>

            <div className="hired-button">
              <button>
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-images">
          <div className="top">
            <img src={top} />
            <img src={bottom} />
          </div>

          <div className="right">
            <img src={right} />
            <img src={rbottom} />
          </div>

          <div className="left">
            <img src={left} />

            <div className="left-how">
              <p>How to build a portfolio website</p>
            </div>

            <div className="left-by">
              <p>
                by <span>Jemima Abu</span> 1 hour 30mins
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="testimonial-header">
            <p>TESTIMONIALS</p>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-image">
              <img src={round}/>
            </div>
            <div className="testimonial-box-container">
              <div className="testimonial-review-box">
                <div className="testimonial-review-image">
                  <img src={eclipse} alt="" />
                </div>

                <div className="testimonial-review-content">
                  <div className="testimonial-review-header">
                    <h3>Stephen Olushola</h3>
                  </div>

                  <div className="testimonial-review-career">
                    <p>UI/UX Designer</p>
                  </div>

                  <div className="testimonial-review-paragraph">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione eveniet consequuntur minima sunt tempore illo
                      dolorem. Commodi deleniti minus voluptates.
                    </p>
                  </div>

                  <div className="rating">
                    <p>
                      4.5 <img src={rating} alt="" />
                    </p>
                  </div>
                </div>
              </div>

              

              <div className='arrows'>
                <img src={arrowleft} />
                <img src={arrow}  />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
    </>
  );
};

export default Portfolio;


