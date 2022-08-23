import React from "react";
import styles from "./Footer.module.sass";

const Footer = ({ className }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}></div>
        </footer>
    );
}
export default Footer;