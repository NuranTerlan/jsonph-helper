import React from "react";
import cn from "classnames";

import styles from "./input.module.scss";

const FormInput = ({
  placeholder = "Type here . . .",
  value,
  type = "text",
  isDashed = false,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.input, className)} {...props}>
      <input onChange={onChange} value={value} type={type} placeholder={placeholder} />
      <svg
        className={cn(styles.none, isDashed && styles.dashed)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          rx="4.5"
          ry="4.5"
          width="99%"
          height="98%"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
        />
      </svg>
    </div>
  );
};

export default FormInput;
