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

    setTimeout(() => {
        setMove(!move)
    }, 2000);

    return (
        <section className={cn(styles.body, className)}>
            <header className={styles.span}>{title}<span className={styles.linearwipe}>{wipe}</span></header>
            <p className={styles.paragraf}>
                {paragraf}
            </p>
            <button
                className={cn(styles.button, { [styles.move]:move })}
                >
                <a href={link} className={styles.link}>
                    {button}
                </a>
            </button>
        </section>
    );
}
export default Span;