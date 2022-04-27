import { Container, Table, TableContainer, TableFooter } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";

const CartPage = () => {
  const data = useContext(clientContext);
  const { getProductsFromCart, myCart, changeCountProductInCart } = data;

  console.log(myCart);

  useEffect(() => {
    getProductsFromCart();
  }, []);

  if (!myCart) {
    return <h2>Loading...</h2>;
  }
  if (myCart.products.legth === 0) {
    return <h2>Basket is empty</h2>;
  }

  return (
    <div>
      <Container>
        <h2>Basket</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name of item</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Sub total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myCart.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                  <TableCell align="center">
                    <img width={100} src={item.product.image} alt="" />
                  </TableCell>
                  <TableCell align="center">{item.product.price} сом</TableCell>
                  <TableCell align="center">
                    <input
                      min={1}
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountProductInCart(
                          item.product.id,
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{item.subPrice} сом</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell align="right" colSpan={4}>
                  <h2>Total Amount</h2>
                </TableCell>
                <TableCell align="center">
                  <h2>{myCart.totalPrice} сом </h2>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default CartPage;
