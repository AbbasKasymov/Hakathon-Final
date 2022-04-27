import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const FiveG = () => {
  const data = useContext(clientContext);
  const { getFiveG, fiveg } = data;

  useEffect(() => {
    getFiveG();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {fiveg.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination />
      </Container>
    </div>
  );
};

export default FiveG;
