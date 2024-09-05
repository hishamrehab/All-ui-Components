import React from "react";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import { NavbarThree } from "./NavbarThree";
import { StickyNavbar } from "./StickyNavbar";
import NavbarFour from "./NavbarFour";
import NavbarSix from "./NavbarSix";

const Navbar = () => {
  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <NavbarThree />
      <StickyNavbar />
      <NavbarFour />
      <NavbarSix />
    </div>
  );
};

export default Navbar;
