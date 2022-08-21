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
        <div className={cn(styles.box, className)}>
            {title && (
                <div>
                    <div className={cn(styles.head, classCardHead)}>
                        <div className={cn(classTitle, styles.title)}>{title}</div>
                        {head && head}
                    </div>
                </div>
            )}
            {children}
        </div>
        </>
    );
};
export default Box;