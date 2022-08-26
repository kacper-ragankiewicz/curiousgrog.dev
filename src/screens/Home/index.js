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
    bar: ["Frontend", "Backend", "Security"]
};

const Home = ({ className }) => {

    return (
        <div className={styles.header}>
            <div className={styles.hidder}
            >
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
                    one={content.bar[0]}
                    two={content.bar[1]}
                    three={content.bar[2]}
                />
            </div>
            <div className={styles.holder}>
            <dic className={styles.title}>My projects:</dic>
                <Spans
                    title="StarCNTR"
                    object={["React", "NodeJS", "Sass", "SQL"]}
                    className={styles.spans}
                    desc="Web APP with logging and API"
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
            </div>
        </div>
    );
}
export default Home;