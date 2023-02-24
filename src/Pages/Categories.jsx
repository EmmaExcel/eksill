import React from "react";
import "./Categories.css";
import bars from "../images/logo/Vector.png";
import swipe from "../images/logo/arrow.png";
import figma from "../images/introduction-to-figma.png";
import smallside from '../images/logo/Group34.png'
import iphone from "../images/whatsapp/iphone.png"

const Categories = () => {
  return (
    <>
      <section className="category-container">
        <div className="category-header">
          <p>
            Our <span>Categories</span>
          </p>
          <div className="category-img">
            <img src={bars} />
          </div>
        </div>

        <div className="category-box-container">
          <div className="category-box">
            <div className="category-box-header">
              <p>PRODUCT DESIGN</p>
            </div>
            <div className="category-box-paragraph">
              <p>
                
                product design describes the process of imagining, creating, and
                iterating products that solve users...
              </p>
            </div>

            <div className="category-box-button-container">
              <button className="category-box-button">Learn <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="category-box w">
            <div className="category-box-header">
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="category-box-paragraph">
              <p>
                Web development is the work involved in developing a website for
                the Internet (World Wide Web) or an...
              </p>
            </div>

            <div className="category-box-button-container">
              <button className="category-box-button">Learn </button>
            </div>
          </div>
          <div className="category-box p">
            <div className="category-box-header">
              <p>PHOTOGRAPHY</p>
            </div>
            <div className="category-box-paragraph">
              <p>
                Photography is the art, application, and practice of creating
                durable images by recording light, either...
              </p>
            </div>

            <div className="category-box-button-container">
              <button className="category-box-button">Learn <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <div className='swipe'>
            <img src={swipe} />
          </div>
        </div>


        <div className="join-classes-container">
            <div className="join-header-container">
                <img src={smallside} alt="" />
                <div className="join-header">
                    <p>Join Our Online <span>classes</span></p>

                    <div className="join-us">
                        <button>Join us <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div className='figma-container'>
                <div className="figma-image">
                <img src={figma} alt="" />

                <div className='figma-paragraph'>
                    <p>Introduction to Figma</p>
                </div>

                <div className='figma-author'>
                    <p>By <span>Adi Purdila</span> 2 hours 13 mins</p>
                </div>
                </div>
            </div>
        </div>


        <div className="meeting-container">
            <div className="meet-container">
                <div className="meet">
                        <div className="meet-header">
                            <p>Meet <span>With Skilled </span>Users <span>All Over</span></p>
                        </div>
                        <div className="meet-button">
                            <button>Join us  <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                </div>
                <div className="meet-phone">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
