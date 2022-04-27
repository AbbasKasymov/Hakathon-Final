import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCjh9Rs9mfiKqOFQ6ZO_S5uVQ0YMRF46Zo",
  authDomain: "js-gang-shop.firebaseapp.com",
  projectId: "js-gang-shop",
  storageBucket: "js-gang-shop.appspot.com",
  messagingSenderId: "847710301826",
  appId: "1:847710301826:web:e31197d03eb0ed1fec8e9b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
