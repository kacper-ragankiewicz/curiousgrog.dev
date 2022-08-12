import React from "react";
import styles from "./Item.module.sass";

const Item = ({ className, icon }) => {

    return (
        <li className={styles.navitem}>
            <a href="/" className={styles.icon}>
                {icon}
            </a>
        </li>
    );
}
export default Item;