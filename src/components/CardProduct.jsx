import "../App.css";
import Button from "./Button";

const CardProduct = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card-product">
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <h3>{product.title}</h3>
            <p>
              <b>$ {product.price} </b>
            </p>
            <Button link={`/product/${product.id}`} variant="button-view">
              View Detail
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
