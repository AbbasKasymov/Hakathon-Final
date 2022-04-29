import { Container } from "@mui/material";
import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import Footer from "../components/Footer";
import { adminContext } from "../contexts/AdminContext";

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProduct, products } = data;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Admin page</h1>
          <AdminTable products={products} />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default AdminPage;
