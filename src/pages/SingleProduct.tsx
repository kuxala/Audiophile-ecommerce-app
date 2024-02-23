import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function SingleProduct() {
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

        <Section>
          <div>
            <Features>Features</Features>
            <FeaturesDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              omnis, alias dolore, ea exercitationem iure inventore repellat
              error ipsa delectus labore, maiores modi!
            </FeaturesDescription>
          </div>
          <TheBox>
            <InTheBox>in the box</InTheBox>

            <Ul>
              <EachDiv>
                <EachDivP>1X</EachDivP>
                <Li>something 1</Li>
              </EachDiv>
              <EachDiv>
                <EachDivP>1X</EachDivP>
                <Li>something 1</Li>
              </EachDiv>
              <EachDiv>
                <EachDivP>1X</EachDivP>
                <Li>something 1</Li>
              </EachDiv>
              <EachDiv>
                <EachDivP>1X</EachDivP>
                <Li>something 1</Li>
              </EachDiv>
            </Ul>
          </TheBox>
          <Images>
            <Img1
              src="../../assets/product-xx59-headphones/mobile/image-product.jpg"
              width="100%"
            />
            <Img2
              src="../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
              width="100%"
            />
            <Img3
              src="../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg"
              width="100%"
            />
          </Images>
        </Section>
      </WholeComponent>
    </>
  );
}

const Img1 = styled.img`
  border-radius: 8px;
  height: 220px;
`;

const Img2 = styled.img`
  border-radius: 8px;
  height: 220px;
`;
const Img3 = styled.img`
  border-radius: 8px;
  height: 400px;
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 88px;
`;
const EachDiv = styled.div`
  display: flex;
  gap: 24px;
`;
const EachDivP = styled.p`
  color: #d87d4a;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
`;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
`;
const TheBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InTheBox = styled.h1`
  padding-top: 88px;
  padding-bottom: 24px;
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: 0.857px;
  text-transform: uppercase;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Features = styled.h1`
  padding-bottom: 24px;
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: 0.857px;
  text-transform: uppercase;
`;

const FeaturesDescription = styled.div`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;
const AddTo = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 88px;
`;
const Button = styled.button`
  width: 50%;
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
