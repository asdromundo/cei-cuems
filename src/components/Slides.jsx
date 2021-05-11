import React from "react";
import Slider from "react-slick";
import Image from "./Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = (settings) => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image fileName="curso-profesionista.jpg" />
        </div>
        <div>
          <Image fileName="curso-computacion.jpg" />
        </div>
        <div>
          <Image fileName="curso-profesionista.jpg" />
        </div>
        <div>
          <Image fileName="curso-bachillerato.jpeg" />
        </div>
      </Slider>
    </div>
  );
};

Slides.settings = {
  className: "carrusel",
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  variableWidth: true,
};

export default Slides;
