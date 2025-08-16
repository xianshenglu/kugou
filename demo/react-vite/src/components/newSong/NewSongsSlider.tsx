import React from 'react'
import Slider from 'react-slick'
import './NewSongsSlider.less'
const settings = {
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  dotsClass: 'slick-dots newSongsSlider__pagination'
}

interface NewSongsSliderProps {
  banners: {
    id: number;
    imgurl: string;
    title: string;
  }[];
}

function NewSongsSlider({
  banners
}: NewSongsSliderProps) {
  return (
    <div className="newSongsSlider" onTouchStart={e => e.stopPropagation()}>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id}>
            <img
              src={banner.imgurl}
              alt={banner.title}
              className="newSongsSlider__img"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default NewSongsSlider
