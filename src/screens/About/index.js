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
                >
                    <div className={styles.liner}>
                        <div className={styles.element}>JavaScript</div>
                        <div className={styles.element}>TypeScript</div>
                    </div>
                    <div className={styles.liner}>
                        <div className={styles.element}>React</div>
                        <div className={styles.element}>CSS</div>
                    </div>
                    <div className={styles.liner}>
                        <div className={styles.element}>NodeJS</div>
                        <div className={styles.element}>SQL</div>
                    </div>
                </Box>
                <Box
                    title="About"
                >
                    <span className={styles.span}>Hi, My name is Kacper</span>

                    <p className={styles.paragraf}>I'm Fullstack Developer and Cyber Security researcher. For dayly bases I spend most of my time on developing my projects and implementing new ideas.</p>
                </Box>
            </div>
            <div className={styles.line}>
                <Box
                    title="Known Technologies"
                    className={styles.know}
                >
                <div className={styles.elementwrapper}>
                        <div className={styles.objectone}>React</div>
                        <div className={styles.objecttwo}>Sass</div>
                        <div className={styles.objectthree}>NodeJS</div>
                        <div className={styles.objectfour}>SQL</div>
                        <div className={styles.objectfive}>JavaScript</div>
                        <div className={styles.objectsix}>CSS</div>
                        <div className={styles.objectseven}>HTML</div>
                        <div className={styles.objecteight}>PostgreSQL</div>
                        <div className={styles.objectnine}>Python</div>
                        <div className={styles.objectten}>OWASP10</div>
                        <div className={styles.objecteleven}>Linux</div>
                        <div className={styles.objecttwelve}>C++</div>
                </div>

                </Box>
                <Box
                    title="Writing code since:"
                />
            </div>
            <div className={styles.wrap}>
             </div>
        </div>

    );
}
export default About;