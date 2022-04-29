import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageCollage = () => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="collage"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
          className="collage-items"
        >
          <div className="vertical">
            <div className="title">
              <h3>iPhone</h3>
              <Link to="/category/cellphones">
                <p>Смотреть модели </p>
              </Link>
            </div>
            <img
              src="https://asiastore.kg/catalog/view/theme/default/image/cat/iphone_12_pro_max_pacific_blue_block-4.png"
              alt=""
              style={{
                height: "70%",
                width: "100%",
                padding: "0px 30px 10px 30px",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="notsquare">
                <div className="title">
                  <h3>MacBook</h3>
                  <Link to="/category/tablets">
                    <p>Смотреть модели </p>
                  </Link>
                </div>
                <img
                  src="https://asiastore.kg/catalog/view/theme/default/image/cat/cat-macbookair.png"
                  style={{
                    width: "100%",
                    padding: "80px 80px 0px 80px",
                    height: "80%",
                  }}
                  alt=""
                />
              </div>

              <div className="square">
                <div className="title">
                  <h3>iPad</h3>
                  <Link to="/category/tablets">
                    <p>Смотреть модели </p>
                  </Link>
                </div>
                <img
                  src="https://asiastore.kg/catalog/view/theme/default/image/cat/cat-ipadair.png"
                  alt=""
                  style={{
                    width: "100%",
                    padding: "40px 40px 0 40px",
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="square">
                <div className="title">
                  <h3>JBL</h3>
                  <Link to="/category/accessories">
                    <p>Смотреть модели </p>
                  </Link>
                </div>
                <img
                  src="https://asiastore.kg/catalog/view/theme/default/image/cat/cat-jbl.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>

              <div className="square">
                <div className="title">
                  <h3>Apple TV</h3>
                  <Link to="/category/hotspotes">
                    <p>Смотреть модели </p>
                  </Link>
                </div>
                <img
                  src="https://asiastore.kg/catalog/view/theme/default/image/cat/cat-tv.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>

              <div className="square">
                <div className="title">
                  <h3>Accessories</h3>
                  <Link to="/category/accessories">
                    <p>Смотреть модели </p>
                  </Link>
                </div>
                <img
                  src="https://asiastore.kg/catalog/view/theme/default/image/cat/cat-aks2021.png"
                  alt=""
                  style={{ width: "100%", height: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageCollage;
