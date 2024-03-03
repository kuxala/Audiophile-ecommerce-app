import HeaderMobile from "./components/HeaderMobile";
import data from "./data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routers from "./routers/Routers";
import Menu from "./components/Menu";
import { createContext, useState, useEffect } from "react";
import Card from "./components/Card";

export const MyContext = createContext<any>(null);

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  const [screenSize, setScreenSize] = useState<any>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [hamburger, sethamburger] = useState<boolean>(false);
  const [card, setCard] = useState<boolean>(false);
  const [counter, setCounter] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

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
    <MyContext.Provider
      value={{
        hamburger,
        sethamburger,
        websiteData,
        setWebsiteData,
        screenSize,
        card,
        setCard,
        counter,
        setCounter,
        activeLink,
        setActiveLink,
      }}
    >
      {screenSize.width > 868 ? (
        <Header />
      ) : (
        <HeaderMobile hamburger={hamburger} sethamburger={sethamburger} />
      )}
      {card ? <Card /> : null}
      {hamburger ? null : <Routers websiteData={websiteData} />}
      {hamburger ? <Menu /> : null}
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
