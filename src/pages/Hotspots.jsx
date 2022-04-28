import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const Hotspots = () => {
  const data = useContext(clientContext);
  const { getHotspots, hotspots } = data;

  useEffect(() => {
    getHotspots();
  }, []);

  return (
    <div>
      <Container>
        <div className="products-list">
          {hotspots.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        {/* <MyPagination /> */}
      </Container>
    </div>
  );
};

export default Hotspots;
