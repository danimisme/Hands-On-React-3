import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Button from "../components/Button";
import Header from "../components/Header";

const DetailProductPage = () => {
  const [detailProduct, setDetailProduct] = useState({});

  const { id } = useParams();
  const getDetailProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setDetailProduct(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailProduct();
  }, [id]);

  return (
    <div>
      <Header text="Detail Product" />
      <div className="detail-product-container">
        <div className="image-product-container">
          <img src={detailProduct.image} alt={detailProduct.title} />
        </div>
        <div className="detail-product-description">
          <h1>{detailProduct.title}</h1>
          <h2>$ {detailProduct.price}</h2>
          <p>
            <b>Product ID :</b> {detailProduct.id}
          </p>
          <p>
            {" "}
            <b>Category :</b> {detailProduct.category}
          </p>
          <p>{detailProduct.description}</p>
        </div>
      </div>
      <div className="button-container">
        <Button link="/">Back</Button>
        <Button link="/" variant="add-to-cart">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default DetailProductPage;
