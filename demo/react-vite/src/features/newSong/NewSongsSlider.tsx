import Slider, { type Settings } from 'react-slick'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './NewSongsSlider.module.less'
const settings: Settings = {
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  dotsClass: 'slick-dots ' + styles.newSongsSlider__pagination,
  className: styles.newSongsSlider__container
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
    <div className={styles.newSongsSlider} onTouchStart={e => e.stopPropagation()}>
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id}>
            <img
              src={banner.imgurl}
              alt={banner.title}
              className={styles.newSongsSlider__img}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default NewSongsSlider
