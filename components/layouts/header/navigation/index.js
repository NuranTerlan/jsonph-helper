import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./navigation.module.scss";

import NavBtn from "../navigation-items/nav-btn/index";
import { NAV_ITEMS } from "./../../../../constants/index";

const NavBar = ({ isLoggedIn, className }) => {
  let router = useRouter()
  const [route,setRoute] = useState(router.pathname);

  useEffect(() => {
    setRoute(router.pathname)
  },[router.pathname])

  return (
    <div className={cn(styles.navigation, className)}>
      {NAV_ITEMS.map((item) => (
          isLoggedIn !== item.isPublic && <NavBtn link={item.metaUrl} isSelected={route === item.metaUrl} key={item.name}>{item.name}</NavBtn>
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
