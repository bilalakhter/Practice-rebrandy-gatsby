import React from "react";
import Menu from "./Menu";
import logo from "/src/pages/assets/adobe.png"
function Header() {

  return (
    <div className=" header bg-[#081730] flex items-center justify-between px-[5rem]  text-[0.8rem] pb-4 pt-6">
      <img
        src={logo}
        alt=""
        className="logo  w-[42px] h-[42px]"
      />
      <Menu />
    </div>
  );
}

export default Header;