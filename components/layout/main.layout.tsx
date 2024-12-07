import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-16"></div>
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
