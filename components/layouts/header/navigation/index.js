import React from "react";
import { connect } from "react-redux";
import cn from "classnames";

import styles from "./navigation.module.scss";

import NavBtn from "../navigation-items/nav-btn/index";
import { NAV_ITEMS } from "./../../../../constants/index";

const NavBar = ({ isLoggedIn, className }) => {
  return (
    <div className={cn(styles.navigation, className)}>
      {NAV_ITEMS.map((item) => (
          isLoggedIn !== item.isPublic && <NavBtn key={item.name}>{item.name}</NavBtn>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.repository.isLoggedIn
  }
}

export default connect(mapStateToProps)(NavBar);
