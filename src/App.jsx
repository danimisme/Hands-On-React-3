import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import CardProduct from "./components/CardProduct";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Header text="Fake Store" />
      <CardProduct products={products} />
    </>
  );
}

export default App;
