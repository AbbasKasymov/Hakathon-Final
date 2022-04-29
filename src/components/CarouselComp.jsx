import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <Link to="/category/cellphones">
            <img
              className="d-block w-100"
              src="https://asiastore.kg/image/cachewebp/catalog/banners/iphone13greenbanner-2560x800.webp"
              alt="First slide"
              style={{ height: "450px" }}
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/category/smartwatches">
            <img
              className="d-block w-100"
              src="https://asiastore.kg/image/cachewebp/catalog/banners/bannerfenix7-2560x800.webp"
              alt="Second slide"
              style={{ height: "450px" }}
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/category/tablets">
            <img
              className="d-block w-100"
              src="https://asiastore.kg/image/cachewebp/catalog/banners/ipadair4banner-2560x800.webp"
              alt="Third slide"
              style={{ height: "450px" }}
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
