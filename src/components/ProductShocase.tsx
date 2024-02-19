import styled from "styled-components";
import "../styles/ProductShowcase.css";
const ImageAnimation = styled.img`
  width: 150px;
  transition: width 0.3s ease;
  &:hover {
    width: 180px;
  }
`;

function ProductShocase() {
  return (
    <>
      <div className="product-shop-section">
        <div className="product-shop">
          <ImageAnimation
            src="../../assets\shared\desktop\image-category-thumbnail-headphones.png"
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
          <ImageAnimation
            src="../../assets\shared\desktop\image-category-thumbnail-speakers.png"
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
          <ImageAnimation
            src="../../assets\shared\desktop\image-category-thumbnail-earphones.png"
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

export default ProductShocase;
