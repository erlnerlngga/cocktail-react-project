import React, { FC, ReactElement } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout: FC = (): ReactElement => {
  return (
    <div className="bg-zinc-800">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
