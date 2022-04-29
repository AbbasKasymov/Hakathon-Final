import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const Accessories = () => {
  const data = useContext(clientContext);
  const { getAccessories, accessories } = data;

  useEffect(() => {
    getAccessories();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {accessories.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Accessories;
