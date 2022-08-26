import React from "react";
import styles from "./Waves.module.sass";
import cn from "classnames";

const Waves = ({ className }) => {
    return (
        <div className={cn(styles.ocean, className)}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </div>
    );
}
export default Waves;