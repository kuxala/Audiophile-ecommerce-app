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
        <img src="../../assets/shared/desktop/up-arrow.svg" width="24px" />
      </Button>
    </>
  );
}

export default ScrollUp;

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 0;
  background-color: rgba(241, 241, 241, 0.8);

  padding: 0.5rem;
  z-index: 999; /* Ensure the button is above other content */
`;
