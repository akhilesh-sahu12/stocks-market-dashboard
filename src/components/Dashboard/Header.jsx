import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsGripVertical,
  BsBrightnessHighFill
} from "react-icons/bs";

import { useTheme } from "../../context/ThemeContext";

function Header({ OpenSidebar }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
      <BsBrightnessHighFill onClick={toggleTheme} className="icon"/>
        <BsFillEnvelopeFill className="icon" />
        <BsFillBellFill className="icon" />
        <BsGripVertical className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
