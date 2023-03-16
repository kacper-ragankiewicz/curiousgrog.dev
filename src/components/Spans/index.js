import React from "react";
import styles from "./Spans.module.sass";
import cn from "classnames";

import Box from "../Box";

import githublogo from "../../assets/img/github-logo.png"

const Spans = ({
    className,
    buttonSpan,
    title,
    object,
    liStyle,
    desc,
    img,
    url,
    github,
    map,
    mapObject
}) => {
    const [visible, setVisible] = React.useState(false);
    const [cat, setCat] = React.useState(false)

    const mapList = mapObject?.map((item, index) =>
        <li key={index}>{item}</li>
    )

    return(
        <Box
            title={title}
            className={className}
        >
            {desc && <p className={styles.desc}>{desc}</p>}
            {object &&
                <ul className={cn(styles.body, liStyle)}>
                { object?.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
            }
            { map &&
                <div className={styles.mapWrapper}>
                    <div className={styles.map}>{map}</div>
                    <div className={styles.mapContainer}>
                        <ul className={styles.bodyMap}>
                            {mapList}
                        </ul>
                    </div>
                </div>
            }
            {url || img || github ?
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
                {github &&
                    <span onClick={() => setCat(!cat)} className={cn(styles.github, { [styles.active]: cat})}><a href={github}><img src={githublogo} alt="Github"/></a></span>
                }
            </div> : null}
        </Box>
    );
}
export default Spans;