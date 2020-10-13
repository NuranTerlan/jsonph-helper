import React from "react";
import cn from "classnames";

import styles from "./postcard.module.scss";


const PostCard = ({ num, title, className }) => {
    return (
        <div className={cn(styles.card, className)}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.order}>{num}</span>
        </div>
    );
};

export default PostCard;