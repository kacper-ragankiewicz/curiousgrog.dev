import React from "react";
import styles from "./About.module.sass";
import cn from "classnames";

// components
import Box from "../../components/Box";
import Shower from "../../components/Shower";
import Spans from "../../components/Spans";

// scripts
import { Date as days } from "../../scripts/Date";




const About = ({ className }) => {
    const date_2 = new Date();
    const [visible, setVisible] = React.useState(false);

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.image}>
                    <img src={require("../../assets/img/helmet_grogu.jpg")} alt='grogu'/>
                </div>
                <div className={styles.name}>
                    <span>Kacper</span>
                    <div className={styles.deve}>Fullstack Developer</div>
                    <div className={styles.since}><span>since:</span>{days(new Date('8/25/2021'),date_2)} Months</div>
                </div>
            </div>
            <div className={styles.holder}>
                <Spans
                    title="Skills"
                    className={styles.skills}
                    object={[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "CSS/Sass",
                        "NodeJS",
                        "SQL",
                        "Information Technology",
                    ]}
                />
                <Box
                    title="About"
                >
                    <span className={styles.span}>Hi, My name is Kacper</span>

                    <p className={styles.paragraf}>I'm <span>Fullstack Developer</span> and <span>Cyber Security</span> researcher. For daily bases I spend most of my time on developing my projects and implementing new ideas.</p>
                </Box>
                <Shower
                    title="Known Technologies"
                    object={[
                        "React",
                        "Sass",
                        "NodeJS",
                        "SQL",
                        "JavaScript",
                        "CSS",
                        "HTML",
                        "PostgreSQL",
                        "Python",
                        "OWASP10",
                        "Linux",
                        "C++"
                    ]}
                />
                <Box
                    title="Using technology since:"
                >
                    <ul className={styles.tech}>
                        <li>
                            <p>HTML + CSS</p>
                            <p><span>since: </span>{days(new Date('04/23/2020'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <p><span>since: </span>{days(new Date('02/23/2021'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>React</p>
                            <p><span>since: </span>{days(new Date('12/12/2021'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>Python</p>
                            <p><span>since: </span>{days(new Date('01/6/2022'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>Linux</p>
                            <p><span>since: </span>{days(new Date('04/23/2019'), date_2)} Months</p>
                        </li>
                        <li>
                            <p>SQL</p>
                            <p><span>since: </span>{days(new Date('08/8/2021'), date_2)} Months</p>
                        </li>
                    </ul>
                </Box>
                <Box
                    title="Cybersecurity Cert's:"
                >
                    <div className={styles.badge}>
                        <img src="https://tryhackme-badges.s3.amazonaws.com/Roko.png" alt="TryHackMe"></img>
                    </div>
                    <ul className={styles.cert}>
                        <li onClick = {() => setVisible(!visible)}>COMPLETE BEGINNER</li>
                    </ul>
                    <div className={cn(styles.comp, { [styles.visible]: visible })}>
                        <span className={styles.close} onClick={()=> setVisible(!visible)}>x</span>
                        <img src={require("../../assets/img/THM-QYGR1JFFXQ.png")}/>
                    </div>
                </Box>
                <Spans
                    title="curiousgrog.dev"
                    object={["React", "Sass", "Animations"]}
                    className={styles.spans}
                    desc="This website"
                    url="/"
                    buttonSpan="You are here!"
                ></Spans>
             </div>
        </div>

);
}
export default About;