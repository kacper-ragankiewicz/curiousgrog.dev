import React from "react";
import cn from "classnames";
import styles from "./Span.module.sass";

const Span = ({
    className,
    title,
    paragraf,
    button,
    wipe,
    link,
    onClick
}) => {
    return (
        <>
        <span className={styles.span}>{title}<span className={styles.linearwipe}>{wipe}</span></span>
                    <p className={styles.paragraf}>
                        {paragraf}
                    </p>
                    <button
                        className={cn(styles.button, styles.active)}
                        onClick={onClick}
                        >
                        <a href={link} className={styles.link}>
                            {button}
                        </a>
                    </button>
        </>
    );
}
export default Span;