import React from "react";
import styles from "./Slidebox.module.sass";

import Waves from "../Waves";

const Slidebox = ({ className }) => {

    return (
        <div className={styles.animation}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Waves />
                    <div className={styles.line}>
                         <div className={styles.boxone}/>
                    <div className={styles.boxtwo}/>
                    <div className={styles.boxthree}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slidebox;