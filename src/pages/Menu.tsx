import styled from "styled-components";
import ProductShocase from "../components/ProductShocase";

function Menu() {
  return (
    <>
      <Container>
        <ProductShopSection>
          <ProductShop>
            <ProductImageSmall
              src="../../assets\shared\desktop\image-category-thumbnail-headphones.png"
              className="product-image-small"
            />
            <ProductShopName>HEADPHONES</ProductShopName>

            <div>
              <ProductShopLink>
                Shop
                <img
                  src="../../assets/shared/desktop/icon-arrow-right.svg"
                  height="12px"
                />
              </ProductShopLink>
            </div>
          </ProductShop>
          <ProductShop>
            <ProductImageSmall
              src="../../assets\shared\desktop\image-category-thumbnail-speakers.png"
              className="product-image-small"
            />
            <ProductShopName>Speakers</ProductShopName>

            <div>
              <ProductShopLink>
                Shop
                <img
                  src="../../assets/shared/desktop/icon-arrow-right.svg"
                  height="12px"
                />
              </ProductShopLink>
            </div>
          </ProductShop>
          <ProductShop>
            <ProductImageSmall
              src="../../assets\shared\desktop\image-category-thumbnail-earphones.png"
              className="product-image-small"
            />
            <ProductShopName>Earphones</ProductShopName>

            <div>
              <ProductShopLink>
                Shop
                <img
                  src="../../assets/shared/desktop/icon-arrow-right.svg"
                  height="12px"
                />
              </ProductShopLink>
            </div>
          </ProductShop>
        </ProductShopSection>
      </Container>
    </>
  );
}
export default Menu;

const Container = styled.div`
  display: flex;
  min-height: 60vh;
  background-color: #fff;
  padding-bottom: 50px;
  width: 100%;
`;

const ProductShopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  margin: 0 auto;
  margin-top: 80px;
`;

const ProductShop = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 327px;

  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  transition: width 0.3s ease;
  &:hover {
    width: 300px;
  }
`;

const ProductShopName = styled.div`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.071px;
  text-transform: uppercase;
  padding-bottom: 18px;
  position: relative;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const ProductShopLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.5);
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    color: #d87d4a;
  }
`;

const ProductImageSmall = styled.img`
  position: relative;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
`;
