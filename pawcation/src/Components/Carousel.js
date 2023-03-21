import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import dogImg1 from "../images/img2.png";
import catImg from "../images/catimg1.jpg";
import dogImg_last from "../images/img_last.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="testimonial-img" src={dogImg_last} alt="dog-profile" />
        <h2 className="testimonial-text">
          Pawcation was a lifesaver for me and my furry friend during our
          last-minute trip!
        </h2>
        <p className="testimonial_name">Virat kohli, <i>India</i></p>
      </Carousel.Item>
      <Carousel.Item>
        <img className="testimonial-img" src={dogImg1} alt="dog-profile" />
        <h2 className="testimonial-text">
          Pawcation made leaving my furry friend behind stress-free with their
          attentive staff and comfortable accommodations.
        </h2>
        <p className="testimonial_name">Sachin, <i>India</i> </p>
      </Carousel.Item>
      <Carousel.Item>
        <img className="testimonial-img" src={catImg} alt="cat-profile" />
        <h2 className="testimonial-text">
          Pawcation exceeded my expectations with their clean facilities,
          professional staff, and personalized care for my pet
        </h2>
        <p className="testimonial_name">Robert , <i>USA</i> </p>

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
