import "../styles/ProductPage.css";

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

      <div className="product-shop-section">
        <div className="product-shop">
          <img
            src="../../assets\shared\desktop\image-category-thumbnail-headphones.png"
            width="150px"
            className="product-image-small"
          />
          <h3 className="product-shop-name">HEADPHONES</h3>

          <div>
            <p className="product-shop-a">
              Shop
              <img
                src="../../assets/shared/desktop/icon-arrow-right.svg"
                className="right-arrow"
                height="12px"
              />
            </p>
          </div>
        </div>
        <div className="product-shop">
          <img
            src="../../assets\shared\desktop\image-category-thumbnail-speakers.png"
            width="150px"
            className="product-image-small"
          />
          <h3 className="product-shop-name">SPEAKERS</h3>

          <div>
            <p className="product-shop-a">
              Shop
              <img
                src="../../assets/shared/desktop/icon-arrow-right.svg"
                className="right-arrow"
                height="12px"
              />
            </p>
          </div>
        </div>
        <div className="product-shop">
          <img
            src="../../assets\shared\desktop\image-category-thumbnail-earphones.png"
            width="150px"
            className="product-image-small"
          />
          <h3 className="product-shop-name">EARPHONES</h3>

          <div>
            <p className="product-shop-a">
              Shop
              <img
                src="../../assets/shared/desktop/icon-arrow-right.svg"
                className="right-arrow"
                height="12px"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
