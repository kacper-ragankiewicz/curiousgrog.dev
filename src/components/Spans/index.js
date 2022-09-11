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
    img,
    url,
}) => {
    const [visible, setVisible] = React.useState(false);

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
            {url || img ?
            <div className={styles.wrap}>
                {img &&
                    <button className={styles.button} onClick={()=> setVisible(!visible)}><span>Show me</span></button>}
                        <div className={cn(styles.comp, { [styles.visible]: visible })}>
                            <span className={styles.close} onClick={()=> setVisible(!visible)}>x</span>
                            <img className={styles.image} src={img} alt=""/>
                        </div>
                {url &&    <button className={styles.button}>
                    <a href={url}>{buttonSpan ? buttonSpan : "Check out"}</a>
                </button> }
            </div> : null}
        </Box>
    );
}
export default Spans;