import React, { ReactNode } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import style from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={style.headerBlockContainer}>
      <Header />
      <div className={style.mainBlock}>{children}</div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;