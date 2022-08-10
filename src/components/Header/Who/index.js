import React from "react";
import styles from "./Who.module.sass";

const Who = ({ className }) => {

    return (
        <>
        <div className={styles.who}>
            <button className={styles.head}>
                <span className={styles.info}>Info</span>
            </button>
        </div>
        </>
    )
}
export default Who;