import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const Smartwatches = () => {
  const data = useContext(clientContext);
  const { getWatches, watches } = data;

  useEffect(() => {
    getWatches();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {watches.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination />
      </Container>
    </div>
  );
};

export default Smartwatches;
