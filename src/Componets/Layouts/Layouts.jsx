import React from "react";
import Routers from "../Route/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layouts = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts
