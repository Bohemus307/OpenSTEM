import { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";


const Main: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <NavBar
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <Header
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
export default Main;