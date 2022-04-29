import React from "react";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h2>Connect with T-Mobile</h2>
          <Instagram style={{ color: "white", margin: "25px 10px 0 20px" }} />
          <Facebook style={{ color: "white", margin: "25px 10px 0 0px" }} />
          <Twitter style={{ color: "white", margin: "25px 10px 0 0px" }} />
          <YouTube style={{ color: "white", margin: "25px 10px 0 0px" }} />
        </div>
        <div className="list-row">
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>Mac</li>
              <li>MacMini</li>
              <li>Accessories</li>
              <li>Apple Podcasts</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>Mac</li>
              <li>MacMini</li>
              <li>Accessories</li>
              <li>Apple Podcasts</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>Mac</li>
              <li>MacMini</li>
              <li>Accessories</li>
              <li>Apple Podcasts</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>Mac</li>
              <li>MacMini</li>
              <li>Accessories</li>
              <li>Apple Podcasts</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>Mac</li>
              <li>MacMini</li>
              <li>Accessories</li>
              <li>Apple Podcasts</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
