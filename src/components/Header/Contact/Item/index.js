import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ className, item, onClose }) => {
  return (
    <>
        <div className={styles.item}>
            <div className={cn(styles.icon)}>
                <img src={item.icon} alt="ICON" />
            </div>
            <div className={styles.details}>
                <div className={styles.line}>
                    <div className={styles.subtitle}>{item.title}</div>
                </div>
                <div className={styles.content}>{item.content}</div>
            </div>
        </div>
    </>
  );
};

export default Item;
