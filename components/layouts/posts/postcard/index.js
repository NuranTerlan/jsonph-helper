import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./postcard.module.scss";


const PostCard = ({ template = "#", link = "#", num, title, className }) => {
    return (
        <Link href={link} as={template} >
            <div className={cn(styles.card, className)}>
                <h2 className={styles.title}>{title}</h2>
                <span className={styles.order}>{num}</span>
            </div>
        </Link>
    );
};

export default PostCard;