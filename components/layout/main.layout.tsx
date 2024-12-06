import React from "react";
import Header from "./header";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <div className="min-h-[80vh]">{children}</div>
    </>
  );
};

export default MainLayout;
