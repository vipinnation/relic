import React from "react";
import Header from "./header";
import { Sidebar } from "./sidebar";

type Props = { children: React.ReactNode };

const SchoolLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-[10rem] shadow-md bg-gray-100 fixed h-full">
          <Sidebar />
        </div>

        <div className="w-full min-h-[80vh] ml-[10rem] mt-16">{children}</div>
      </div>
    </>
  );
};

export default SchoolLayout;
