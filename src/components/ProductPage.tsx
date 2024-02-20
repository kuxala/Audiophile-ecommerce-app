import "../styles/ProductPage.css";
import Footer from "./Footer";
import LastSection from "./LastSection";
import ProductShocase from "./ProductShocase";
import SpeakersShowcase from "./SpeakersShowcase";

function ProductPage() {
  return (
    <>
      <div className="background">
        <div className="whole-div">
          <p className="product-header">New Product</p>
          <h1 className="product-name">XX99 Mark II HeadphoneS</h1>
          <p className="product-description">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="yellow-btn button">SEE PRODUCT</button>
        </div>
      </div>
      <ProductShocase />
      <SpeakersShowcase />
      <LastSection />
      <Footer />
    </>
  );
}
export default ProductPage;
