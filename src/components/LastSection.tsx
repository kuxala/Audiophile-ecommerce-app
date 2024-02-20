import styled from "styled-components";

function LastSection() {
  return (
    <>
      <LastSectionDiv>
        <LeftCol>
          <Img src="../../assets/shared/mobile/image-best-gear.jpg" />
        </LeftCol>

        <RightCol>
          <H1>
            Bringing you the <Span>best</Span> audio gear
          </H1>
          <P>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </P>
        </RightCol>
      </LastSectionDiv>
    </>
  );
}

export default LastSection;

const Img = styled.img`
  width: 100%;
  display: flex;
  border-radius: 8px;
`;
const LastSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 200px;
  }
`;
const H1 = styled.h1`
  padding-top: 32px;
  padding-bottom: 24px;
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
    padding-top: 100px;
  }
`;
const Span = styled.span`
  color: #d87d4a;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const P = styled.p`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  padding-bottom: 200px;
  @media only screen and (min-width: 768px) {
    text-align: left;
    max-width: 445px;
  }
`;

const LeftCol = styled.div`
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const RightCol = styled.div`
  @media only screen and (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flexstart;
  }
`;
