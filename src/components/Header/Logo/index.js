import React from "react";
import styles from "./Logo.module.sass";

const Logo = ({ className }) => {

    return (
        <div className={styles.logo}>
            <a href="/"><span>curiousgrog<span className={styles.dev}>.dev</span></span></a>
        </div>
    );
};
export default Logo;