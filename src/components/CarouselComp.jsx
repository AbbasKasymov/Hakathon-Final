import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asiastore.kg/image/cachewebp/catalog/banners/iphone13greenbanner-2560x800.webp"
            alt="First slide"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asiastore.kg/image/cachewebp/catalog/banners/iphone13proalpinegreenbanner-2560x800.webp"
            alt="Second slide"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://asiastore.kg/image/cachewebp/catalog/banners/iphoneseuzhevprodazhe-2560x800.webp"
            alt="Third slide"
            style={{ height: "450px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
