import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../Images/Image3.jfif";
import slide2 from "../Images/Image2.jfif";
import slide3 from "../Images/carousel_3.jpg";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item >
        <img className="d-block w-100" src={slide1} alt="First slide" style={{ height: "700px" }}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" style={{ height: "700px" }} />

       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" style={{ height: "700px" }}/>

     
      </Carousel.Item>
    </Carousel>
  );
}
