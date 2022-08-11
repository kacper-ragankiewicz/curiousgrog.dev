import React from "react";
import styles from "./Github.module.sass";


const Github = ({ className }) => {

    return (
        <>
            <div className={styles.body}>
                <button className={styles.head}>
                    <span className={styles.span}>Github</span>
                </button>
            </div>
        </>
    )
}
export default Github;