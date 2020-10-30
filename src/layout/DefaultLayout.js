import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";
export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      Main content
      <Footer />
    </div>
  );
};
