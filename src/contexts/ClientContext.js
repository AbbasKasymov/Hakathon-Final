import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { api, newApi } from "../helperss/const";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const clientContext = React.createContext();

const initState = {
  products: [],
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  myCart: null,
  productDetails: null,
  user: null,
  phones: [],
  tablets: [],
  accessories: [],
  watches: [],
  fiveg: [],
  hotspots: [],
  card: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_PRODUCTS_FROM_CART":
      return { ...state, myCart: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "GET_PHONES":
      return { ...state, phones: action.payload };
    case "GET_FIVEG":
      return { ...state, fiveg: action.payload };
    case "GET_TABLETS":
      return { ...state, tablets: action.payload };
    case "GET_ACCESSORIES":
      return { ...state, accessories: action.payload };
    case "GET_HOTSPOTS":
      return { ...state, hotspots: action.payload };
    case "GET_WATCHES":
      return { ...state, watches: action.payload };
    case "SET_CARD_DATA":
      return { ...state, card: action.payload };
    default:
      return state;
  }
};
const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProduct = async (params) => {
    console.log(params);

    const response = await axios(`${api}?${params}`);
    console.log(response.data);
    const action = {
      type: "GET_PRODUCT",
      payload: response.data,
    };
    dispatch(action);
  };

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("products");
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const products = state[`${currentCategory}`].slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalCount = state.products.length;

  const handlePagination = (page, category) => {
    setCurrentCategory(category);
    setCurrentPage(page);
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    newProduct.subPrice = product.price * newProduct.count;
    cart.products.push(newProduct);
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    console.log(cart.products.length);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    console.log(cart);
    let prod = cart.products.find((item) => {
      return item.product.id === id;
    });
    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newProducts = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.products = newProducts;
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
  };

  const getProductsFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { products: [] };
    const action = {
      type: "GET_PRODUCTS_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountProductInCart = (id, count) => {
    if (count < 1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
      }
      return item;
    });
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductsFromCart();
  };

  const likeCounter = async (id, count) => {
    await axios.patch(`${api}/${id}`, { likes: count + 1 });
    getProduct();
  };

  const getProductDetails = async (id) => {
    const response = await axios(`${api}/${id}`);
    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const addFeedback = async (newFeedback, product) => {
    if (product.feedback) {
      product.feedback.push(newFeedback);
      await axios.patch(`${api}/${product.id}`, product);
    } else {
      product.feedback = [newFeedback];
      await axios.patch(`${api}/${product.id}`, product);
    }
  };

  const getPhones = async () => {
    const response = await axios(`${api}?category=Cell phones`);
    const action = {
      type: "GET_PHONES",
      payload: response.data,
    };
    dispatch(action);
  };
  const getFiveG = async () => {
    const response = await axios(`${api}?category=5G phones`);
    const action = {
      type: "GET_FIVEG",
      payload: response.data,
    };
    dispatch(action);
  };
  const getTablets = async () => {
    const response = await axios(`${api}?category=Tablets`);
    const action = {
      type: "GET_TABLETS",
      payload: response.data,
    };
    dispatch(action);
  };
  const getWatches = async () => {
    const response = await axios(`${api}?category=Smartwatches`);
    const action = {
      type: "GET_WATCHES",
      payload: response.data,
    };
    dispatch(action);
  };
  const getAccessories = async () => {
    const response = await axios(`${api}?category=Accessories`);
    const action = {
      type: "GET_ACCESSORIES",
      payload: response.data,
    };
    dispatch(action);
  };
  const getHotspots = async () => {
    const response = await axios(`${api}?category=Hotspotes`);
    const action = {
      type: "GET_HOTSPOTS",
      payload: response.data,
    };
    dispatch(action);
  };

  // const setCardData = (card, item) => {
  //   localStorage.setItem("card", JSON.stringify(item));
  //   const action = {
  //     type: "SET_CARD_DATA",
  //     payload: item.card,
  //   };
  //   dispatch(action);
  // };
  // const setCardData = async (newCardValue, card) => {
  //   if (card.cardValue) {
  //     card.cardValue.push(newCardValue);
  //     await axios.patch(`${api}/${card.id}`, card);
  //   } else {
  //     card.cardValue = [newCardValue];
  //     await axios.patch(`${api}/${card.id}`, card);
  //   }
  // };
  const addCardInfo = async (cardInfo) => {
    await axios.post(newApi, cardInfo);
  };
  return (
    <clientContext.Provider
      value={{
        getProduct: getProduct,
        handlePagination: handlePagination,
        addProductToCart: addProductToCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getProductsFromCart: getProductsFromCart,
        changeCountProductInCart: changeCountProductInCart,
        likeCounter: likeCounter,
        getProductDetails: getProductDetails,
        authWithGoogle: authWithGoogle,
        logout: logout,
        addFeedback: addFeedback,
        getPhones: getPhones,
        getAccessories,
        getFiveG,
        getHotspots,
        getTablets,
        getWatches,
        // setCardData,
        addCardInfo: addCardInfo,
        watches: state.watches,
        tablets: state.tablets,
        hotspots: state.hotspots,
        accessories: state.accessories,
        fiveg: state.fiveg,
        phones: state.phones,
        productDetails: state.productDetails,
        user: state.user,
        myCart: state.myCart,
        cartCount: state.cartCount,
        products: products,
        totalCount: totalCount,
        productsPerPage: productsPerPage,
        card: state.card,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
