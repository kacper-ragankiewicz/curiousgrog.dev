import React from "react";
import styles from "./About.module.sass";


const About = ({ className }) => {

    return (
        <>
            <div className={styles.body}>
                <button className={styles.head}>
                    <span className={styles.span}>About</span>
                </button>
            </div>
        </>
    )
}
export default About;