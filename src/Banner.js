/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Banner = () => {
  return (
    <div>
    {/* <!-- ***** Main Banner Area Start ***** --> */}
    <div class="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
            <source src="assets/images/gym-video.mp4" type="video/mp4" />
        </video>

        <div class="video-overlay header-text">
            <div class="caption">
                <h6>work harder, get stronger</h6>
                <h2>easy with our <em>gym</em></h2>
                <div class="main-button scroll-to-section">
                    <a href="#features">Become a member</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ***** Main Banner Area End ***** --> */}
    </div>
  )
}

export default Banner