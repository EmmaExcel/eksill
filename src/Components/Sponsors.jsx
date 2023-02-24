import React from 'react'
import './Sponsors.css'
import first from '../images/image1.png'
import second from '../images/image2.png'
import third from '../images/image3.png'
import fourth from '../images/image4.png'

const Sponsors = () => {
  return (
    <>
        <div className='sponsors-container'>
            <div className='sponsors'>
                <div className="sponsor-header">
                    <p>Our Sponsors</p>
                </div>

                <div className='sponsors-img-container'>
                    <div><img src={first} alt="" /></div>
                    <div><img src={second} alt="" /></div>
                    <div><img src={third} alt="" /></div>
                    <div><img src={fourth} alt="" /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sponsors
