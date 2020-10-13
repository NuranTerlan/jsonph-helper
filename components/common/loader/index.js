import React from "react";
import cn from "classnames";

import styles from "./loader.module.scss";

const Loader = ({ className, ...props }) => {
    return (
        <span className={cn(styles.loader, className)} {...props}></span>
    );
};

export default Loader;