import React from "react";
import styles from "./About.module.sass";
import cn from "classnames";

// components
import Box from "../../components/Box";
const date_1 = new Date('8/25/2021');
const date_2 = new Date();

const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(((difference * -1 ) / (1000 * 3600 * 24))/30);
    return TotalDays;
}

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min
}



const About = ({ className }) => {
    const [move1, setMove1] = React.useState(true);
    const [move2, setMove2] = React.useState(false);
    const [move3, setMove3] = React.useState(false);
    const [move4, setMove4] = React.useState(false);
    const [move5, setMove5] = React.useState(false);
    const [move6, setMove6] = React.useState(false);

    if (move1 === true) setMove1(false)

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.image}>
                    <img src={require("../../assets/img/helmet_grogu.jpg")} alt='grogu'/>
                </div>
                <div className={styles.name}>
                    <span>Kacper</span>
                    <div className={styles.deve}>Fullstack Developer</div>
                    <div className={styles.since}><span>since:</span>{days(date_1,date_2)} Months</div>
                </div>
            </div>
            <div className={styles.line}>
                <Box
                    title="Skills"
                >
                    <div className={styles.liner}>
                        <div className={cn(styles.element, { [styles.move]: move1 })}>JavaScript</div>
                        <div className={cn(styles.element, { [styles.move]: move2 })}>TypeScript</div>
                    </div>
                    <div className={styles.liner}>
                        <div className={cn(styles.element, { [styles.move]: move3 })}>React</div>
                        <div className={cn(styles.element, { [styles.move]: move4 })}>CSS</div>
                    </div>
                    <div className={styles.liner}>
                        <div className={cn(styles.element, { [styles.move]: move5 })}>NodeJS</div>
                        <div className={cn(styles.element, { [styles.move]: move6 })}>SQL</div>
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