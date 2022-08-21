import React from "react";
import styles from "./About.module.sass";
import cn from "classnames";

// components
import Box from "../../components/Box";

const About = ({ className }) => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.image}>
                    <img src={require("../../assets/img/helmet_grogu.jpg")} alt='grogu'/>
                </div>
                <div className={styles.name}>
                    <span>Kacper</span>
                    <div className={styles.deve}>Fullstack Developer</div>
                    <div className={styles.since}>Since 1,5 year</div>
                </div>
            </div>
            <div className={styles.line}>
                <Box
                    title="Skills"
                    classTitle="title-blue"
                />
                <Box
                    title="About"
                    classTitle="title-red"
                />
            </div>
            <div className={styles.line}>
                <Box
                    title="Known Technologies"
                    classTitle="title-green"
                />
                <Box
                    title="Known Technologies"
                    classTitle="title-yellow"
                />
            </div>
            <div className={styles.wrap}>
                <Box
                    title="Career"
                    classTitle="title-purple"
                    className={styles.career}
                />
             </div>
        </div>

    );
}
export default About;