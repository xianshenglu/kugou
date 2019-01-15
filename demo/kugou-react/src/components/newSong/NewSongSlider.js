import React from 'react'
import Slider from 'react-slick'
import './NewSongSlider.less'
const settings = {
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  dotsClass: 'slick-dots newSongSlider__pagination'
}

function NewSongSlider({ data: banners }) {
  return (
    <div className="newSongSlider" onTouchStart={e => e.stopPropagation()}>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id}>
            <img
              src={banner.imgurl}
              alt={banner.title}
              className="newSongSlider__img"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default NewSongSlider
