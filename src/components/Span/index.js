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
}) => {

    const [move, setMove] = React.useState(false);

    return (
        <>
            <div className={styles.body}>
                <span className={styles.span}>{title}<span className={styles.linearwipe}>{wipe}</span></span>
                <p className={styles.paragraf}>
                    {paragraf}
                </p>
                <button
                    className={cn(styles.button, { [styles.move]:move })}
                    onClick={() => setMove(!move)}
                    >
                    <a href={link} className={styles.link}>
                        {button}
                    </a>
                </button>
            </div>
        </>
    );
}
export default Span;