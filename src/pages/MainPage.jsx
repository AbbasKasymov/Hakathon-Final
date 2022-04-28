import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { clientContext } from "../contexts/ClientContext";
import ProductCard from "../components/ProductCard";
import MyPagination from "../components/MyPagination";
import FiltersBlock from "../components/FiltersBlock";
import CarouselComp from "../components/CarouselComp";

const MainPage = () => {
  const data = useContext(clientContext);
  console.log(clientContext);
  const { getProduct, products } = data;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <CarouselComp style={{ width: "100%" }} />
      <Container>
        <FiltersBlock getProduct={getProduct} products={products} />
        <div className="products-list">
          {products.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination category="products" />
      </Container>
    </div>
  );
};

export default MainPage;
