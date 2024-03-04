import { Link } from "react-router-dom";
import "../styles/ProductPage.css";
import LastSection from "./LastSection";
import ProductShocase from "./ProductShocase";
import SpeakersShowcase from "./SpeakersShowcase";

function ProductPage({}: any) {
  return (
    <>
      <div className="background">
        <div className="whole-div animate__animated animate__fadeIn">
          <p className="product-header">New Product</p>
          <h1 className="product-name">XX99 Mark II HeadphoneS</h1>
          <p className="product-description">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className="yellow-btn button"
            to="headphones/xx99-mark-two-headphones"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <ProductShocase />
      <SpeakersShowcase />
      <LastSection />
    </>
  );
}
export default ProductPage;
