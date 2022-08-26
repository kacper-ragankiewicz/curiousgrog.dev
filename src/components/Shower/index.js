import React from "react";
import styles from "./Shower.module.sass";

import Box from "../Box";

const Shower = ({
    className,
    object,
    title,

}) => {
    return (
        <Box
            title={title}
            className={styles.know}
        >
        <div className={styles.body}>
                <span className={styles.object}>{object[0]}</span>
                <span className={styles.object}>{object[1]}</span>
                <span className={styles.object}>{object[2]}</span>
                <span className={styles.object}>{object[3]}</span>
                <span className={styles.object}>{object[4]}</span>
                <span className={styles.object}>{object[5]}</span>
                <span className={styles.object}>{object[6]}</span>
                <span className={styles.object}>{object[7]}</span>
                <span className={styles.object}>{object[8]}</span>
                <span className={styles.object}>{object[9]}</span>
                <span className={styles.object}>{object[10]}</span>
                <span className={styles.object}>{object[11]}</span>
        </div>

        </Box>
    );
}
export default Shower;