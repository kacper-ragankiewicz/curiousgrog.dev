import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

// main
import MainComponent from "../../proto/MainComponent";

// components
import Slidebox from "../../components/Slidebox";
import Span from "../../components/Span";
import Bar from "../../components/Bar";
import Spans from "../../components/Spans";
// import api from "../../api";
import starcntr from "../../assets/img/StarCNTR.png";
import cinema from "../../assets/img/Django.png";

const content = {
    paragraf: "This is my website, here you can learn some useful informations about me. I am always trying to learn new things and always trying to improve my skills.",
};

class Home extends MainComponent {
    constructor(props){
        super(props)
        // this.loadData = () => {
        //     api
        //     .get("/articles/list")
        //     .then((res) => {
        //         this.setState({ data: res.data }); // Object(this.state.data)[0].tablename
        //     })
        //     .catch((err) => {
        //         this.setState({ data: [] });
        //     })
        // }
        this.eventListener = () => {
            window.addEventListener('scroll', () => {
                const scrollvalue = document.documentElement.scrollTop;

                if(scrollvalue>100) return this.setState({visible: true})
            });
        }

    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.hidder}>
                    <div className={styles.body}>
                        <Span
                            title="Fullstack"
                            wipe=" developer"
                            paragraf={content.paragraf}
                            button="Contact me"
                            link="/contact"
                        />
                        <Slidebox/>
                    </div>
                    <Bar
                        object={["Frontend", "Backend", "Security"]}
                    />
                </div>
                <div className={cn(styles.holder, { [styles.active]: this.state.visible})}>
                <header className={styles.title}>My projects<span>:</span></header>
                    <Spans
                        title="DevsCNTR"
                        object={["React", "NodeJS", "Sass", "SQL", "Figma", "API"]}
                        className={styles.spans}
                        desc="Web APP with logging and API"
                        img={starcntr}
                        url="https://devscntr.com/"
                    />
                    <Spans
                        title="AlgoCode"
                        object={["React", "DOM manipulation", "CSS"]}
                        className={styles.spans}
                        desc="Find the shortest path"
                        url="https://algocode.vercel.app/"
                    />
                    <Spans
                        title="Amazingkidsacademy"
                        object={["HTML + CSS", "Bootstrap","Server"]}
                        className={styles.spans}
                        liStyle={styles.list}
                        desc="Comercial website for enterteiment company"
                        url="http://amazingkidsacademy.pl"
                    />
                    <Spans
                        title="curiousgrog.dev"
                        object={["React", "Sass", "Animations", "Webpack"]}
                        className={styles.spans}
                        liStyle={styles.list}
                        desc="This website"
                        url="/"
                        buttonSpan="You are here!"
                        github="https://github.com/kacper-ragankiewicz/curiousgrog.dev"
                    />
                    <Spans
                        title="Cinema"
                        object={["Django", "PostgreSQL", "HTML + CSS","Bootstrap"]}
                        className={styles.spans}
                        liStyle={styles.list}
                        desc="Online cinema website"
                        img={cinema}
                        github="https://github.com/kacper-ragankiewicz/Cinema_django"
                    />
                    <Spans
                        title="Photezer"
                        object={["Frontend", "HTML + CSS", "JavaScript"]}
                        className={styles.spans}
                        desc="Simple website for photography"
                        url="https://photezer.vercel.app"
                        github="https://github.com/kacper-ragankiewicz/Photezer"
                    />
                    <Spans
                        title="3DFXanimation"
                        object={["HTML + CSS", "Vanilla JS","Three.js", "Vite"]}
                        className={styles.spans}
                        liStyle={styles.list}
                        desc="Website based on 3D animation"
                        url="https://curiousgrog-vite.vercel.app"
                        github="https://github.com/kacper-ragankiewicz/3DFXanimation"
                    />
                </div>
                <div className={styles.conteiner}>
                    <Span
                        title="If your whant to know more "
                        wipe=" about me."
                        button="Check out"
                        className={styles.spaner}
                        link={"/about"}
                    />
                </div>
            </div>
        );
    }
}

export default Home;