import { useEffect, useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import data from "./data.json";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  const [screenSize, setScreenSize] = useState({
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
      {/* <HeaderMobile /> */}
      {screenSize.width > 868 ? <Header /> : <HeaderMobile />}
      <ProductPage />
    </>
  );
}

export default App;
