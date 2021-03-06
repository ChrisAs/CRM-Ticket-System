import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";
export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="default-layout">
        <header className="header mb-2"></header>
        <Header />
      </div>
      <main className="main">{children}</main>
      <footer className="footer"></footer>

      <Footer />
    </div>
  );
};
