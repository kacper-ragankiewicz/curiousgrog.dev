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


const useScript = ({ url }) => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
}


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
                    <div className={styles.since}><span>since:</span>{days(date_1,date_2)} Months</div>
                </div>
            </div>
            <div className={styles.holder}>
                <Box
                    title="Skills"
                >
                    <ul className={styles.element}>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>NodeJS</li>
                        <li>SQL</li>
                    </ul>
                </Box>
                <Box
                    title="About"
                >
                    <span className={styles.span}>Hi, My name is Kacper</span>

                    <p className={styles.paragraf}>I'm Fullstack Developer and Cyber Security researcher. For dayly bases I spend most of my time on developing my projects and implementing new ideas.</p>
                    <div>                {useScript('https://tryhackme.com/badge/94886')}</div>
                </Box>
                <Box
                    title="Known Technologies"
                    className={styles.know}
                >
                <div className={styles.elementwrapper}>
                        <span className={styles.object}>React</span>
                        <span className={styles.object}>Sass</span>
                        <span className={styles.object}>NodeJS</span>
                        <span className={styles.object}>SQL</span>
                        <span className={styles.object}>JavaScript</span>
                        <span className={styles.object}>CSS</span>
                        <span className={styles.object}>HTML</span>
                        <span className={styles.object}>PostgreSQL</span>
                        <span className={styles.object}>Python</span>
                        <span className={styles.object}>OWASP10</span>
                        <span className={styles.object}>Linux</span>
                        <span className={styles.object}>C++</span>
                </div>

                </Box>
                <Box
                    title="Using technology since:"
                >
                    <ul className={styles.since}>
                        <li>
                            <p>HTML + CSS</p>
                            <p><span>since:</span>{days(new Date('04/23/2020'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <p><span>since:</span>{days(new Date('02/23/2021'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>React</p>
                            <p><span>since:</span>{days(new Date('12/12/2021'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>Python</p>
                            <p><span>since:</span>{days(new Date('01/6/2022'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>Linux</p>
                            <p><span>since:</span>{days(new Date('04/23/2019'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>SQL</p>
                            <p><span>since:</span>{days(new Date('08/8/2021'), date_2)} Months</p>
                        </li>
                    </ul>
                </Box>
             </div>
        </div>

    );
}
export default About;