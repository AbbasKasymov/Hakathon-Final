import {
  Button,
  Container,
  Table,
  TableContainer,
  TableFooter,
  TextField,
} from "@mui/material";
import { useContext, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as React from "react";
import Footer from "../components/Footer";
import { AddCard } from "@mui/icons-material";
import NumberFormat from "react-number-format";

const CartPage = () => {
  const data = useContext(clientContext);
  const {
    getProductsFromCart,
    myCart,
    changeCountProductInCart,
    setCardData,
    card,
    addCardInfo,
  } = data;

  const [open, setOpen] = React.useState(false);
  const [newCardInfo, setNewCardInfo] = React.useState({
    owner: "",
    cvv: "",
    cardNumber: "",
    expMon: "",
    expYear: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newCardInfo) {
      if (!newCardInfo[key]) {
        alert("Fullfill all inputs");
        return;
      }
    }
    addCardInfo(newCardInfo);
    setNewCardInfo({
      owner: "",
      cvv: "",
      cardNumber: "",
      expMon: "",
      expYear: "",
    });
  };
  // const [owner, setOwner] = React.useState(false);
  // const [cvv, setCvv] = React.useState();
  // const [cardNumber, setCardNumber] = React.useState();
  // const [expMon, setExpMon] = React.useState();
  // const [expYear, setExpYear] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getProductsFromCart();
  }, []);

  if (!myCart) {
    return <h2>Loading...</h2>;
  }
  if (myCart.products.legth === 0) {
    return <h2>Basket is empty</h2>;
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <React.Fragment>
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
                    <TableCell align="center">
                      {item.product.price} USD
                    </TableCell>
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
                    <TableCell align="center">{item.subPrice} USD</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell align="right" colSpan={4}>
                    <h2>Total Amount</h2>
                  </TableCell>
                  <TableCell align="center">
                    <h2>{myCart.totalPrice} USD </h2>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={6}>
                    <div>
                      <Button
                        onClick={handleOpen}
                        variant="contained"
                        style={{
                          width: "16rem",
                          marginRight: "2rem",
                          backgroundColor: "#FF1493",
                        }}
                      >
                        Оплатить
                      </Button>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <form onSubmit={handleSubmit}>
                              <h2>Подтвердите оплату</h2>
                              <div className="payment-modal">
                                <TextField
                                  value={newCardInfo.owner}
                                  onChange={(e) =>
                                    setNewCardInfo({
                                      ...newCardInfo,
                                      owner: e.target.value,
                                    })
                                  }
                                  label="CARD OWNER"
                                  id="outlined-size-small"
                                  size="small"
                                  style={{ marginRight: "15px", width: "70%" }}
                                />
                                {/* <NumberFormat
                                  format="##########"
                                  placeholder="CARD OWNER"
                                /> */}
                                {/* <TextField
                                  value={newCardInfo.cvv}
                                  onChange={(e) =>
                                    setNewCardInfo({
                                      ...newCardInfo,
                                      cvv: e.target.value,
                                    })
                                  }
                                  label="CVV"
                                  id="outlined-size-small"
                                  size="small"
                                  style={{ width: "30%" }}
                                  type="number"
                                /> */}
                                <NumberFormat
                                  format="# # #"
                                  placeholder="CVV"
                                  value={newCardInfo.cvv}
                                  onChange={(e) =>
                                    setNewCardInfo({
                                      ...newCardInfo,
                                      cvv: e.target.value,
                                    })
                                  }
                                  label="CVV"
                                  id="outlined-size-small"
                                  size="small"
                                  style={{ width: "30%" }}
                                />
                              </div>
                              {/* <TextField
                                value={newCardInfo.cardNumber}
                                onChange={(e) =>
                                  setNewCardInfo({
                                    ...newCardInfo,
                                    cardNumber: e.target.value,
                                  })
                                }
                                label="CARD NUMBER"
                                id="outlined-size-small"
                                size="small"
                                style={{ width: "100%", marginBottom: "15px" }}
                                type="number"
                              /> */}
                              <NumberFormat
                                format="#### #### #### ####"
                                placeholder="Card Number"
                                value={newCardInfo.cardNumber}
                                onChange={(e) =>
                                  setNewCardInfo({
                                    ...newCardInfo,
                                    cardNumber: e.target.value,
                                  })
                                }
                                label="CARD NUMBER"
                                id="outlined-size-small"
                                size="small"
                                style={{ width: "100%", marginBottom: "15px" }}
                                // type="number"
                              />

                              <div className="payment-data">
                                <div className="exp-date">
                                  {/* <TextField
                                    value={newCardInfo.expMon}
                                    onChange={(e) =>
                                      setNewCardInfo({
                                        ...newCardInfo,
                                        expMon: e.target.value,
                                      })
                                    }
                                    label="EXP MONTH"
                                    id="outlined-size-small"
                                    size="small"
                                    style={{
                                      marginRight: "15px",
                                      width: "7rem",
                                    }}
                                    type="number"
                                  /> */}
                                  <NumberFormat
                                    format="##/##"
                                    placeholder="MM/YY"
                                    mask={["M", "M", "Y", "Y"]}
                                    value={newCardInfo.expMon}
                                    onChange={(e) =>
                                      setNewCardInfo({
                                        ...newCardInfo,
                                        expMon: e.target.value,
                                      })
                                    }
                                    label="EXP MONTH"
                                    id="outlined-size-small"
                                    size="small"
                                    style={{
                                      marginRight: "15px",
                                      width: "7rem",
                                    }}
                                  />

                                  <TextField
                                    value={newCardInfo.expYear}
                                    onChange={(e) =>
                                      setNewCardInfo({
                                        ...newCardInfo,
                                        expYear: e.target.value,
                                      })
                                    }
                                    label="EXP YEAR"
                                    id="outlined-size-small"
                                    size="small"
                                    style={{ width: "5rem" }}
                                    type="number"
                                  />
                                </div>
                                <div className="cards-icons">
                                  <img
                                    src="https://img.icons8.com/color/2x/visa.png"
                                    alt=""
                                  />
                                  <img
                                    src="https://img.icons8.com/fluency/2x/mastercard.png"
                                    alt=""
                                  />
                                  <img
                                    src="https://img.icons8.com/fluency/2x/amex.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <Button
                                // onSubmit={handleSubmit}
                                onClick={handleClose}
                                variant="contained"
                                type="submit"
                                style={{
                                  width: "100%",
                                  backgroundColor: "#FF1493",
                                }}
                              >
                                Оплатить
                              </Button>
                            </form>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CartPage;
