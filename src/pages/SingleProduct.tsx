import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";

export default function SingleProduct() {
  const { product } = useParams();
  console.log(product);
  const context = useContext(MyContext);

  return (
    <>
      <WholeComponent>
        <GoBack>Go Back</GoBack>
        <Component>
          <LeftCol>
            <MainImage
              src="../../assets/product-xx59-headphones/mobile/image-product.jpg"
              width="100%"
            />
          </LeftCol>
          <RightCol>
            <NewProductP>new product</NewProductP>
            <ProductText>NAMES</ProductText>
            <ProductDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              consectetur iusto itaque dignissimos deserunt sit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus
              consequuntur eaque reiciendis reprehenderit vero laboriosam, modi!
            </ProductDescription>
            <Price>Price</Price>
            <AddTo>
              <Input type="number" />
              <Button className="yellow-btn">Add to cart</Button>
            </AddTo>
          </RightCol>
        </Component>

        <Section>
          <SmallSection>
            <Description>
              <Features>Features</Features>
              <FeaturesDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                omnis, alias dolore, ea exercitationem iure inventore repellat
                error ipsa delectus labore, maiores modi!
              </FeaturesDescription>
            </Description>
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
          </SmallSection>
          <Images>
            <TwoSide>
              <Img1 src="../../assets/product-xx59-headphones/mobile/image-product.jpg" />
              <Img2 src="../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg" />
            </TwoSide>
            <Img3 src="../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg" />
          </Images>
        </Section>
      </WholeComponent>
    </>
  );
}

const Description = styled.div`
  @media only screen and (min-width: 768px) {
    width: 70%;
    max-width: 635px;
  }
`;

const SmallSection = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    padding: 48px 0;
  }
`;
const TheBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;
const MainImage = styled.img`
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    max-width: 540px;
    height: 560px;
  }
`;
const Img1 = styled.img`
  border-radius: 8px;
  height: 220px;
  @media only screen and (min-width: 768px) {
    width: 444px;
    height: 280px;
    flex-shrink: 0;
    flex-shrink: 0;
  }
`;

const Img2 = styled.img`
  border-radius: 8px;
  height: 220px;
  @media only screen and (min-width: 768px) {
    width: 444px;
    height: 280px;
    flex-shrink: 0;
    flex-shrink: 0;
  }
`;
const Img3 = styled.img`
  border-radius: 8px;
  height: 400px;
  @media only screen and (min-width: 768px) {
    width: 58%;
    height: 592px;
  }
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 88px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const TwoSide = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
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
  @media only screen and (min-width: 768px) {
    padding: 0;
    font-size: 32px;
    padding-bottom: 24px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    margin-top: 160px;
    padding-bottom: 160px;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const FeaturesDescription = styled.div`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 50%;
`;
const Input = styled.input`
  width: 40%;
  height: 48px;
  flex-shrink: 0;
  background: #f1f1f1;
  border: 0;
  padding: 20px;
`;

const AddTo = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 88px;
`;

const WholeComponent = styled.div`
  padding: 16px 24px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 165px;
  }
`;
const Component = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftCol = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
const RightCol = styled.div`
  width: 100%;
  padding-top: 32px;
  @media only screen and (min-width: 768px) {
    max-width: 445px;
    margin: 0 auto;
  }
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
  @media only screen and (min-width: 768px) {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    padding-top: 70px;
    padding-bottom: 24px;
  }
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
  @media only screen and (min-width: 768px) {
    padding-top: 48px;
    font-size: 14 px;
  }
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
  @media only screen and (min-width: 768px) {
    color: #000;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    letter-spacing: 1.429px;
    text-transform: uppercase;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    padding-top: 24px;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 48px;
  }
`;
