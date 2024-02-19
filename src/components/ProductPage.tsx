import "../styles/ProductPage.css";
import LastSection from "./LastSection";
import ProductShocase from "./ProductShocase";
import SpeakersShowcase from "./SpeakersShowcase";

function ProductPage() {
  return (
    <>
      <div className="background">
        <p className="product-header">New Product</p>
        <h1 className="product-name">XX99 Mark II HeadphoneS</h1>
        <p className="product-description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="yellow-btn button">SEE PRODUCT</button>
      </div>
      <ProductShocase />
      <SpeakersShowcase />
      <LastSection />
    </>
  );
}
export default ProductPage;
