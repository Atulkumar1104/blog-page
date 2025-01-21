// components/Layout.jsx
import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Routers from "./Route/route";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
