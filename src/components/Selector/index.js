import React from "react";
import styles from "./Selector.module.sass";

import Box from "../Box";

const Selector = ({ className }) => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    My projects
                </div>
                <div className={styles.boxholder}>
                <Box className={styles.box}>
                    <span>StarCNTR</span>
                    <div className={styles.tech}></div>
                </Box>
                <Box className={styles.box}>Photezer</Box>
                <Box className={styles.box}>Cinema</Box>
                </div>

            </div>
        </>
    );
}
export default Selector;