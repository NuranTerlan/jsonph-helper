import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./button.module.scss";

const FormBtn = ({
  children,
  isLink = false,
  url = "#",
  type = "button",
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.btn, className)} {...props}>
      {isLink === false ? (
        <button onClick={onClick} type={type} disabled={disabled}>
          {children}
        </button>
      ) : (
        <Link href={url}>
          <a rel="noreferrer" target="_blank">
            <button onClick={onClick} type={type} disabled={disabled}>
              {children}
            </button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default FormBtn;
