import React from "react";
import cn from "classnames";

import styles from "./layout.module.scss";

import Header from "../header";

const LayoutBuilder = ({ children, className }) => {
  return (
    <div className={cn(styles.layout)}>
      <Header />
      <main className={cn(className)}>{children}</main>
    </div>
  );
};

export default LayoutBuilder;
