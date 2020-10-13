import React from "react";
import cn from "classnames";

import styles from "./header.module.scss";

import NavBar from "./navigation/index";
import Logo from "./navigation-items/logo/index";

const Header = ({ className, ...props }) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <Logo>
        {"{"}JSON{"}"}
        <span>.placeholder</span>
      </Logo>
      <NavBar />
    </div>
  );
};

export default Header;
