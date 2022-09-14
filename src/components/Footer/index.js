import React from "react";
import styles from "./Footer.module.sass";

import Logo from "../Header/Logo"

const Footer = ({ className }) => {
    return (
        <footer className={styles.footer}>
            <header className={styles.body}>
                <Logo className={styles.logo}/>
            </header>
        </footer>
    );
}
export default Footer;