import React from "react";
import styles from "./Spans.module.sass";
import cn from "classnames";

import Box from "../Box";

const Spans = ({
    className,
    buttonSpan,
    title,
    object,
    liStyle,
    desc,
    url,
}) => {
    return(
        <Box
            title={title}
            className={className}
        >
            {desc && <div className={styles.desc}>{desc}</div>}
            <ul className={cn(styles.body, liStyle)}>
                {object[0] && <li>{object[0]}</li>}
                {object[1] && <li>{object[1]}</li>}
                {object[2] && <li>{object[2]}</li>}
                {object[3] && <li>{object[3]}</li>}
                {object[4] && <li>{object[4]}</li>}
                {object[5] && <li>{object[5]}</li>}
                {object[6] && <li>{object[6]}</li>}
                {object[7] && <li>{object[7]}</li>}
                {object[8] && <li>{object[8]}</li>}
                {object[9] && <li>{object[9]}</li>}
            </ul>
            {url && <div className={styles.wrap}><button className={styles.button}>
                    <a href={url}>{buttonSpan ? buttonSpan : "Check out"}</a>
                </button></div>}
        </Box>
    );
}
export default Spans;