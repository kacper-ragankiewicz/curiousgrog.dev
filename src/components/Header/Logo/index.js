import React from "react";
import styles from "./Logo.module.sass";

const Logo = ({ className }) => {

    return (
        <div className={styles.logo}>
           <span>curiousgrog<span className={styles.dev}>.dev</span></span>
        </div>
    );
};
export default Logo;