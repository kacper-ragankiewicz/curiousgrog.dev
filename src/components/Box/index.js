import React from "react";
import styles from "./Box.module.sass";
import cn from "classnames";

const Box = ({
    className,
    title,
    children,
    classCardHead,
    classTitle,
    head
}) => {
    return (
        <>
        <section className={cn(styles.box, className)}>
            {title && (
                <div>
                    <div className={cn(styles.head, classCardHead)}>
                        <header className={cn(classTitle, styles.title)}>{title}</header>
                        {head && head}
                    </div>
                </div>
            )}
            {children}
        </section>
        </>
    );
};
export default Box;