import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

// components
import Slidebox from "../../components/Slidebox";
import Span from "../../components/Span";
import Bar from "../../components/Bar";
import Spans from "../../components/Spans";

const content = {
    paragraf: "This is my website, here you can learn some useful informations about me. I am always trying to learn new things and always trying to improve my skills.",
};

const Home = ({ className }) => {
    const [visible, setVisible] = React.useState(false)

    const changeValueScroll = () => {
        const scrollvalue = document.documentElement.scrollTop;

        if(scrollvalue>100) setVisible(true)
    }

    window.addEventListener('scroll', changeValueScroll)

    return (
        <div className={styles.header}>
            <div className={styles.hidder}>
                <div className={styles.body}>
                    <Span
                        title="Fullstack"
                        wipe=" developer"
                        paragraf={content.paragraf}
                        button="Contact me"
                    />
                    <Slidebox/>
                </div>
                <Bar
                    object={["Frontend", "Backend", "Security"]}
                />
            </div>
            <div className={cn(styles.holder, { [styles.active]: visible})}>
            <dic className={styles.title}>My projects:</dic>
                <Spans
                    title="DevsCNTR"
                    object={["React", "NodeJS", "Sass", "SQL", "Figma", "API"]}
                    className={styles.spans}
                    desc="Web APP with logging and API"
                    img={require("../../assets/img/StarCNTR.png")}
                    url="https://devscntr.com/"
                ></Spans>
                <Spans
                    title="Photezer"
                    object={["Frontend", "HTML + CSS", "JavaScript"]}
                    className={styles.spans}
                    desc="Simple website for photography"
                    url="https://photezer.vercel.app"
                ></Spans>
                <Spans
                    title="curiousgrog.dev"
                    object={["React", "Sass", "Animations"]}
                    className={styles.spans}
                    liStyle={styles.list}
                    desc="This website"
                    url="/"
                    buttonSpan="You are here!"
                ></Spans>
                <Spans
                    title="Cinema"
                    object={["Django", "PostgreSQL", "HTML + CSS","Bootstrap"]}
                    className={styles.spans}
                    liStyle={styles.list}
                    desc="Online cinema website"
                ></Spans>
                <Spans
                    title="Amazingkidsacademy"
                    object={["HTML + CSS", "Bootstrap","Server"]}
                    className={styles.spans}
                    liStyle={styles.list}
                    desc="Comercial website for enterteiment company"
                    url="http://amazingkidsacademy.pl"
                ></Spans>
                <Spans
                    title="Cryptomage S.A."
                    object={["React/JSX", "NodeJS","PostgreSQL","BigDATA"]}
                    className={styles.spans}
                    liStyle={styles.list}
                    desc="Worked on NDR probe"
                    url="https://www.cryptomage.com/"
                ></Spans>
            </div>
        </div>
    );
}
export default Home;