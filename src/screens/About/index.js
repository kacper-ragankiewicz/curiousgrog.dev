import React, { Component } from "react";
import styles from "./About.module.sass";
import cn from "classnames";

// components
import Box from "../../components/Box";
import Shower from "../../components/Shower";
import Spans from "../../components/Spans";
import DateBox from "../../components/DateBox";
import helmet_grogu from "../../assets/img/helmet_grogu.jpg";

import cert from "../../assets/img/THM-QYGR1JFFXQ.png";

// scripts
import { Date as days } from "../../scripts/Date";


class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
        }
    }

    render() {
    return (
                <div className={styles.body}>
                    <div className={styles.header}>
                        <div className={styles.image}>
                            <img src={helmet_grogu} alt='grogu'/>
                        </div>
                        <div className={styles.name}>
                            <span>Kacper</span>
                            <div className={styles.deve}>Fullstack Developer</div>
                            <div className={styles.since}><span>since:</span>{days(new Date('8/25/2021'), new Date())} Months</div>
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
                        <DateBox
                            title="Using technology since:"
                            item={['HTML+CSS', 'JavaScript', 'React', 'Python', 'Linux', 'SQL']}
                            date={['04/23/2020', '02/23/2021', '12/12/2021', '01/6/2022', '04/23/2019', '08/8/2021']}
                        />
                        <Box
                            title="Cybersecurity Cert's:"
                        >
                            <div className={styles.badge}>
                                <img src="https://tryhackme-badges.s3.amazonaws.com/Roko.png" alt="TryHackMe"></img>
                            </div>
                            <ul className={styles.cert}>
                                <li onClick = {() => this.setState({visible: !this.state.visible})}>COMPLETE BEGINNER</li>
                            </ul>
                            <div className={cn(styles.comp, { [styles.visible]: this.state.visible })}>
                                <span className={styles.close} onClick={()=> this.setState({visible: !this.state.visible})}>x</span>
                                <img src={cert} alt="Cert"/>
                            </div>
                        </Box>
                        <Spans
                            title="curiousgrog.dev"
                            object={["React", "Sass", "Animations"]}
                            className={styles.spans}
                            desc="This website"
                            url="https://github.com/kacper-ragankiewicz/curiousgrog.dev"
                            buttonSpan="See on Github!"
                        ></Spans>
                     </div>
                </div>
        )
    }
}

export default About;