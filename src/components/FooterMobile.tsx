import "../styles/FooterMobile.css";

interface Props {
  websiteData: any;
}
function FooterMobile({ websiteData }: Props) {
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
export default FooterMobile;
