import styled from "styled-components";
const Footerr = styled.footer`
  background-color: #101010;
`;
const FootertDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-top: 52px;
`;
const Nav = styled.nav`
  display: flex;
  padding-top: 48px;
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
`;
const Social = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  justify-content: center;
  color: #fff;
`;
function Footer() {
  return (
    <>
      <Footerr>
        <FootertDiv>
          <Img src="../../assets/shared/desktop/logo.svg" />
          <Nav>
            <Ul>
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
            </Ul>
          </Nav>
          <P>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </P>
          <P>Copyright 2021. All Rights Reserved</P>
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
        </FootertDiv>
      </Footerr>
    </>
  );
}

export default Footer;
