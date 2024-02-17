import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

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
      <div>
        <h1>Fake Store Api</h1>
      </div>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card-product">
            <img src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
