import { useParams } from "react-router-dom";
import styled from "styled-components";

function SingleProduct() {
  //params
  const { product } = useParams();
  console.log(product);
  return (
    <>
      <WholeComponent>
        <GoBack>Go Back</GoBack>
        <Component>
          <LeftCol>
            <img
              src="../../assets/product-xx59-headphones/mobile/image-product.jpg"
              width="100%"
            />
          </LeftCol>
          <RightCol>
            <NewProductP>new product</NewProductP>
            <ProductText>NAMES</ProductText>
            <ProductDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              consectetur iusto itaque dignissimos deserunt sit.
            </ProductDescription>
            <Price>Price</Price>
            <AddTo>
              <Input type="number" value="1" />
              <Button className="yellow-btn">Add to cart</Button>
            </AddTo>
          </RightCol>
        </Component>

        <section>
          <div>
            <h1>Features</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              omnis, alias dolore, ea exercitationem iure inventore repellat
              error ipsa delectus labore, maiores modi!
            </p>
          </div>
          <div>
            <h1>in the box</h1>
            <ul>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
          <div>
            <img />
            <img />
            <img />
          </div>
        </section>
      </WholeComponent>
    </>
  );
}
export default SingleProduct;

const AddTo = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 88px;
`;
const Button = styled.button`
  width: 56%;
`;
const Input = styled.input`
  width: 40%;
  height: 48px;
  flex-shrink: 0;
  border: 0;
`;
const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const WholeComponent = styled.div`
  padding: 16px 24px;
`;
const LeftCol = styled.div`
  width: 100%;
`;
const RightCol = styled.div`
  width: 100%;
  padding-top: 32px;
`;

const GoBack = styled.p`
  padding-bottom: 24px;
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
`;

const NewProductP = styled.p`
  padding-bottom: 24px;
  color: #d87d4a;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
`;
const ProductText = styled.h1`
  color: #000;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ProductDescription = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  padding-top: 24px;
  padding-bottom: 24px;
  max-width: 327px;
`;
const Price = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  padding-bottom: 31px;
`;
