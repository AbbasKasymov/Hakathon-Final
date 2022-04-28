import { Button, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";

const MyPagination = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  const data = useContext(clientContext);
  const { totalCount, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage);

  return (
    <div className="my-pagination">
      <Pagination
        onChange={(_, page) => handlePagination(page, props.category)}
        count={totalPages}
        color="primary"
      />
    </div>
  );
};

export default MyPagination;
