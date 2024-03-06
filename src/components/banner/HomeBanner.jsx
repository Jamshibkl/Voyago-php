import React from 'react'
import './Banner.css'
function HomeBanner() {
  return (
    <>
     <div className="banner">
        <div className="banner-2">
          <div className="column">
            <div className="banner-3">
              <div className="banner-4">Discover a New Way to Travel</div>
              <div className="banner-5">
                Experience Convenience, Safety, and Comfort with Voyago
              </div>
              <div className="banner-6">
                At Voyago, we redefine your journey. Our skilled drivers,
                real-time tracking, and transparent pricing ensure a seamless
                and enjoyable travel experience. Join us on the road to
                stress-free commuting and explore a new era of transportation
              </div>
              <div className="banner-7">Get Started Today</div>
            </div>
          </div>
          <div className="home_banner_img">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f768f874a1f8d1900f551a28b29b8fe5413c96be8bb06df27a70dcf53949b82c?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="Banner_img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner
