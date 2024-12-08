import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import '../App.css';





function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#C4C4C4",
        width: "64px", // Explicit width
        height: "64px", // Explicit height
        borderRadius:"50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 20,
        top: "48%",
       left: "-5%",
        
      }}
      onClick={onClick}
    >
      <FaArrowLeft style={{ fontSize: "16px", color: "white" }} />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#C4C4C4",
        width: "64px", // Explicit width
        height: "64px", // Explicit height
        borderRadius:"50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "48%",
       right: "-5%",
      }}
      onClick={onClick}
    >
      <FaArrowRight style={{ fontSize: "16px", color:"white" }} />
    </div>
  );
}
const Products = ({ productData }) => {
  const settings = {
 
    infinite: true,
    speed: 4500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

   
  };

  return (
    <div className="">
      <Slider {...settings}>
    
        {productData.map((product, index) => (
          <Product
            key={index}
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
            color={product.color}

          />
        ))}
        
      </Slider>

    </div>
  );
};

export default Products;
