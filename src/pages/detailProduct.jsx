import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

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
  }, []);

  return (
    <div className="detail-product-container">
      <div className="image-product-container">
        <img src={detailProduct.image} alt={detailProduct.title} />
      </div>
      <div className="detail-product-description">
        <h1>{detailProduct.title}</h1>
      </div>
    </div>
  );
};

export default DetailProductPage;
