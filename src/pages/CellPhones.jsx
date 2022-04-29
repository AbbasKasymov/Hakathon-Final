import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const CellPhones = () => {
  const data = useContext(clientContext);
  const { getPhones, phones } = data;

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {phones.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CellPhones;
