import React from "react";
import styles from "./Item.module.sass";

const Item = ({ className }) => {

    return (
        <>
            <li className={styles.navitem}>
                <a href="/about" className={styles.icon}>
                    About
                </a>
            </li>
            <li className={styles.navitem}>
                <a href="https://github.com/kacper-ragankiewicz" className={styles.icon}>
                    Github
                </a>
            </li>
            <li className={styles.navitem}>
                <a href="/" className={styles.icon}>
                    Contact
                </a>
            </li>
        </>
    );
}
export default Item;