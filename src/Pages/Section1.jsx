import React from "react";
import "./Section1.css";
import people from "../images/Group78.png";
import avatars from "../images/small-avatars.png";
import wifi from "../images/logo/Group.png";
import sprial from "../images/logo/Group25.png";
import sideline from "../images/logo/Group33.png";

const Section1 = () => {
  return (
    <section className="first-section">
      <div className="first-section-content">
        <img src={sprial} className="sprial" />

        <div className="first-section-header">
          <div className="first-section-title">
            <img src={wifi} className="wifi" />
            <p>
              <span>Enhance </span>
              <div className="your">
                Your <span>Technical</span>
              </div>
              <span>Skill</span> with us
            </p>
          </div>
          <div className="first-section-paragraph">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis maxime suscipit quae nam assumenda!
            </p>
          </div>

          <div className="avatars-container">
            <div className="avatars">
              <img src={avatars}/>
              <div className="avatars-p">
                <p>Over 25k Students</p>
              </div>
            </div>
            <div className="learn">
              <div>Learn More</div> <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="first-section-image">
          <img src={people} />
        </div>
      </div>

      <div className="first-section-box-container">
        <div className="first-section-box">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>

          <div>
            <p>Courses</p>
            <h1 className="k">1.2k</h1>
          </div>
          <div>
            <p>Lectures</p>
            <h1 className="k">150+</h1>
          </div>
          <div>
            <p>Jobs</p>
            <h1 className="k">250+</h1>
          </div>
        </div>
      </div>

      <section className="first-section-why">
        <div className="why-header">
          <p>Why Learn with us ?</p>
        </div>

        <div className="why-content">
          <div className="why-box-flex">
            <img src={sideline} alt={sideline} className='why-box-image' />
            <div className="why-box">
              <div>
                <p className="why-box-title">Skilled Lecturers</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
              <div>
                <p className="why-box-title">24/7 Support</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-box-flex">
            <img src={sideline} alt={sideline} className='why-box-image' />
            <div className="why-box">
              <div>
                <p className="why-box-title">Classic Reviews</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
              <div>
                <p className="why-box-title">Online Classes</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-box-flex">
            <img src={sideline} alt={sideline} className='why-box-image' />
            <div className="why-box">
              <div>
                <p className="why-box-title">Scholarships</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
              <div>
                <p className="why-box-title">Book Library</p>

                <div>
                  <p className="why-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta laboriosam blanditiis asperiores odit vitae. Totam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section1;
