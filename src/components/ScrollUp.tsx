import styled from "styled-components";

function ScrollUp() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }
  return (
    <>
      <Button onClick={scrollToTop}>
        {/* <img src="../../assets/shared/desktop/up-arrow.svg" width="32px" /> */}
      </Button>
    </>
  );
}

export default ScrollUp;

const Button = styled.button`
  /* position: absolute;
  right: 4%;
  top: 352%; */
  position: absolute;
  top: 0%;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 0;
  background-color: #fff;
  padding: 0.5rem;
`;
