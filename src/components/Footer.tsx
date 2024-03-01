import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollUp from "./ScrollUp";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  return (
    <>
      <Footerr>
        <FootertDiv>
          <UpperDiv>
            <Img src="../../assets/shared/desktop/logo.svg" />
            <Nav>
              <Ul>
                <Link to="/" style={{ color: "white" }} onClick={scrollToTop}>
                  <li>Home</li>
                </Link>

                <Link
                  to="/headphones"
                  style={{ color: "white" }}
                  onClick={scrollToTop}
                >
                  <li>Headphones </li>
                </Link>

                <Link
                  to="/speakers"
                  style={{ color: "white" }}
                  onClick={scrollToTop}
                >
                  <li>Speakers </li>
                </Link>
                <Link
                  to="/earphones"
                  style={{ color: "white" }}
                  onClick={scrollToTop}
                >
                  <li>Earphones </li>
                </Link>
              </Ul>
              <ScrollUp />
            </Nav>
          </UpperDiv>
          <BothComponent>
            <LeftText>
              <P>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </P>
              <P>Copyright 2021. All Rights Reserved</P>
            </LeftText>
            <RightSocial>
              <Social>
                <li>
                  <img src="../../assets/shared/desktop/icon-facebook.svg" />
                </li>
                <li>
                  <img src="../../assets/shared/desktop/icon-instagram.svg" />
                </li>
                <li>
                  <img src="../../assets/shared/desktop/icon-twitter.svg" />
                </li>
              </Social>
            </RightSocial>
          </BothComponent>
        </FootertDiv>
      </Footerr>
    </>
  );
}
export default Footer;

const BothComponent = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
const LeftText = styled.div`
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
const RightSocial = styled.div`
  @media only screen and (min-width: 768px) {
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
const UpperDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 165px;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Footerr = styled.footer`
  background-color: #101010;
`;
const FootertDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  @media only screen and (min-width: 768px) {
    width: 143px;
    height: 30px;
    margin: 0;
  }
`;
const Nav = styled.nav`
  display: flex;
  padding-top: 48px;
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;
const Ul = styled.ul`
  text-align: center;
  list-style: none;
  display: flex;
  gap: 16px;
  flex-direction: column;
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const P = styled.p`
  padding-top: 48px;
  padding-bottom: 48px;
  max-width: 327px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  padding-left: 24px;
  padding-right: 24px;
  @media only screen and (min-width: 768px) {
    max-width: 540px;
    text-align: left;
    padding-bottom: 24px;
    margin: 0;
    margin-left: 165px;
  }
`;
const Social = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  justify-content: center;
  color: #fff;
  @media only screen and (min-width: 768px) {
    display: flex;
    /* justify-content: space-around; */
    gap: 24px;
    align-items: center;
    height: 30vh;
  }
`;
