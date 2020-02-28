import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slideOne from '../../img/business.jpg';
import slideTwo from '../../img/family.jpg';
import slideThree from '../../img/home.jpg';
import slideFour from '../../img/reseller.jpg';
import slideFive from '../../img/vereine.jpg';

import s from './CarouselSlider.module.css';

const CarouselSlider = () => {
  return (
    <div className={s.Slider}>
      <Carousel
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        selectedItem={0}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={slideOne} alt="grilled_food" />
        </div>
        <div>
          <img src={slideTwo} alt="grilled_food" />
        </div>
        <div>
          <img src={slideThree} alt="grilled_food" />
        </div>
        <div id="slide">
          <img src={slideFour} alt="grilled_food" />
        </div>
        <div id="slide">
          <img src={slideFive} alt="grilled_food" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
