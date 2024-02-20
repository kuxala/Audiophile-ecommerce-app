import { useEffect, useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import data from "./data.json";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Menu from "./pages/Menu";

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  const [screenSize, setScreenSize] = useState<any>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <>
      {screenSize.width > 868 ? <Header /> : <HeaderMobile />}
      {/* <ProductPage /> */}
      {/* <Headphones websiteData={websiteData} /> */}
      {/* <Earphones websiteData={websiteData} /> */}
      {/* <Speakers websiteData={websiteData} /> */}
      <Menu />
      {/* <Footer /> */}
    </>
  );
}

export default App;
