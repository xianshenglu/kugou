import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import './NewSongsSlider.less'
const settings = {
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  dotsClass: 'slick-dots newSongsSlider__pagination'
}

function NewSongsSlider({ banners }) {
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
NewSongsSlider.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgurl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}
export default NewSongsSlider
