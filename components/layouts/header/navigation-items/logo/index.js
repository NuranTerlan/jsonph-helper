import React from "react";
import cn from "classnames";

import styles from "./logo.module.scss";

const Logo = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      <h1>{children}</h1>
    </div>
  );
};

export default Logo;
