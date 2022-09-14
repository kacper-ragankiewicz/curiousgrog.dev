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
                { object.map((item,index) => (
                    <span className={styles.object} key={index}>{object[index]}</span>
                    ))
                }
        </div>

        </Box>
    );
}
export default Shower;