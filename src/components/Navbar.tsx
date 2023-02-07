import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../summer.png";

const Navbar: FC = (): ReactElement => {
  return (
    <div className="mb-12 py-0 px-16 h-24 flex justify-between items-center shadow-xl">
      <a href="#">
        <img src={logo} alt="Logo" className="h-24 object-fit color" />
      </a>
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <Link
              className="text-2xl text-teal-500 hover:text-teal-200 transition duration-300 font-bold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl text-teal-500 hover:text-teal-200 transition duration-300 font-bold"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
