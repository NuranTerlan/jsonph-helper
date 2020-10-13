import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./nav-btn.module.scss";

const NavBtn = ({ link = "#", isSelected = false,  children, className, ...props }) => {
  return (
    <Link href={link}>
      <button
          className={cn(styles.navBtn, isSelected && styles.selected, className)}
          {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavBtn;
