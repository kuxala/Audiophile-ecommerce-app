import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import LastSection from "../components/LastSection";
import ProductShocase from "../components/ProductShocase";
import Counter from "../components/Counter";

export default function SingleProduct() {
  const { product } = useParams();
  console.log("Params: ", product);
  const context = useContext(MyContext);
  // console.log("Context: ", context.websiteData);

  return (
    <>
      {context.websiteData.map((x: any) => {
        if (x.slug == product) {
          return (
            <WholeComponent>
              <GoBack>Go Back</GoBack>
              <Component>
                <LeftCol>
                  <MainImage
                    src={x.slug === product ? x.image.desktop : null}
                    width="100%"
                  />
                </LeftCol>
                <RightCol>
                  <NewProductP>new product</NewProductP>
                  <ProductText>{x.name}</ProductText>
                  <ProductDescription>{x.description}</ProductDescription>
                  <Price>${x.price}</Price>
                  <AddTo>
                    <Counter />
                    <Button className="yellow-btn">Add to cart</Button>
                  </AddTo>
                </RightCol>
              </Component>

              <Section>
                <SmallSection>
                  <Description>
                    <Features>Features</Features>
                    <FeaturesDescription>{x.features}</FeaturesDescription>
                  </Description>
                  <TheBox>
                    <InTheBox>in the box</InTheBox>
                    {context.websiteData.map((x: any) => {
                      if (x.slug == product) {
                        return (
                          <Ul key={x.id}>
                            {x.includes.map((include: any, index: number) => (
                              <EachDiv key={index}>
                                <EachDivP>{include.quantity}X</EachDivP>
                                <Li>{include.item}</Li>
                              </EachDiv>
                            ))}
                          </Ul>
                        );
                      }
                    })}
                  </TheBox>
                </SmallSection>
                {context.websiteData.map((x: any) => {
                  if (x.slug == product) {
                    return (
                      <Images>
                        <TwoSide>
                          <Img1 src={x.gallery.first.desktop} />
                          <Img2 src={x.gallery.second.desktop} />
                        </TwoSide>
                        <Img3 src={x.gallery.third.desktop} />
                      </Images>
                    );
                  }
                })}
              </Section>
            </WholeComponent>
          );
        }
      })}

      <ProductShocase />
      <LastSection />
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
  width: 100%;
  height: 220px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 280px;
    flex-shrink: 0;
    flex-shrink: 0;
  }
`;

const Img2 = styled.img`
  border-radius: 8px;
  height: 220px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 280px;
    flex-shrink: 0;
    flex-shrink: 0;
  }
`;
const Img3 = styled.img`
  border-radius: 8px;
  height: 400px;
  @media only screen and (min-width: 768px) {
    width: 65%;
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
// const Input = styled.input`
//   width: 40%;
//   height: 48px;
//   flex-shrink: 0;
//   background: #f1f1f1;
//   border: 0;
//   padding: 20px;
// `;

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
