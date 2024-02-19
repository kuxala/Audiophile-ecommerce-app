import "../styles/HeaderMobile.css";

interface Props {
  websiteData: any;
}
function HeaderMobile() {
  return (
    <>
      <footer>
        <div className="header-div">
          <img src="../../assets/shared/desktop/icon-hamburger.svg" />
          <img src="../../assets/shared/desktop/logo.svg" />
          <img src="../../assets/shared/desktop/icon-cart.svg" />
        </div>
      </footer>
    </>
  );
}
export default HeaderMobile;
