import styled from "styled-components";
import ProductShocase from "../components/ProductShocase";
import { useContext } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function Headphones({ websiteData }: any) {
  const context = useContext(MyContext);

  return (
    <>
      <Header>
        <HeaderH1>Headphones</HeaderH1>
      </Header>
      {websiteData
        .filter((x: any) => x.category === "headphones")
        .reverse()
        .map((x: any, id: number) => {
          return (
            <Component key={id}>
              <LeftCol>
                <Img src={x.categoryImage.desktop} />
              </LeftCol>
              <RightCol>
                <HeaderP>New Product</HeaderP>
                <ComponentH1>{x.name}</ComponentH1>
                <ComponentP>{x.description}</ComponentP>
                <Button
                  className="yellow-btn center-button"
                  to={`/headphones/${x.slug}`}
                >
                  See product
                </Button>
              </RightCol>
            </Component>
          );
        })}
      <ProductShocase />
    </>
  );
}
export default Headphones;

const Img = styled.img`
  display: flex;
  margin: 0 auto;
  width: 90%;
  border-radius: 8px;
  margin: 0 24px;
  margin-top: 64px;
  @media only screen and (min-width: 768px) {
    max-width: 540px;
    max-height: 560px;
    flex-shrink: 0;
    margin: 0 auto;
  }
`;
const Header = styled.div`
  width: 100%;
  background-color: #000;
  opacity: 0.95;
`;

const HeaderH1 = styled.h1`
  padding: 32px 0;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 100px 0;
  }
`;
const LeftCol = styled.div`
  width: 100%;
`;

const RightCol = styled.div`
  width: 100%;
  padding: 0 24px;
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;
const HeaderP = styled.p`
  padding-top: 32px;
  padding-bottom: 24px;
  color: #d87d4a;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    text-align: left;
    padding-top: 150px;
  }
`;
const ComponentH1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;
const ComponentP = styled.p`
  padding-top: 24px;
  padding-bottom: 24px;
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  @media only screen and (min-width: 768px) {
    text-align: left;
    max-width: 445px;
  }
`;
const Button = styled(Link)`
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`;
