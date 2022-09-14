import React from "react";
import cn from "classnames";
import styles from "./Logo.module.sass";

const Logo = ({ className }) => {

    return (
        <header className={cn(styles.logo, className)}>
            <a href="/"><span>curiousgrog<span className={styles.dev}>.dev</span></span></a>
        </header>
    );
};
export default Logo;