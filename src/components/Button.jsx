import { Link } from "react-router-dom";

const Button = ({ link, variant, children }) => {
  return (
    <Link to={link} className={`button ${variant ? variant : ""}`}>
      {children}
    </Link>
  );
};

export default Button;
