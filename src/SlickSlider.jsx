import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaComment } from 'react-icons/fa6';
import { list } from './data';

export const SlickSlider = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    // dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className='slick-container'>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {list.map((item) => {
          const { id, image, name, title, quote } = item;
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <FaComment className='icon' />
              <p className='text'>{quote}</p>
            </article>
          );
        })}
      </Slider>
      <div className='btn-container' style={{ textAlign: 'center' }}>
        <button className='button' onClick={play}>
          Play
        </button>
        <button className='button' onClick={pause}>
          Pause
        </button>
      </div>
    </section>
  );
};
