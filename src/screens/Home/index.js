import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

import Card from "../../components/Card";
import Slidebox from "../../components/Slidebox";
import photo from "../../assets/img/photo2.jpg";
import Span from "../../components/Span";
import { isFocusable } from "@testing-library/user-event/dist/utils";

const content = {
    paragraf: "This is my website, here you can learn some useful informations about me. I am always trying to learn new things and always trying to improve my skills.",
};

const Home = ({ className }) => {
    const [lightone, setLightone] = React.useState(true);
    const [lighttwo, setLighttwo] = React.useState(false);
    const [lightthree, setLightthree] = React.useState(false);

    if(lightone == true) {
        setTimeout(() => {
            setLightone(!lightone)
            setLighttwo(!lighttwo)
        }, 1000);
    }
    if(lighttwo == true) {
        setTimeout(() => {
            setLighttwo(!lighttwo)
            setLightthree(!lightthree)
        }, 1000);
    }
    if(lightthree == true) {
        setTimeout(() => {
            setLightthree(!lightthree)
            setLightone(!lightone)
        }, 1000);
    }
    return (
        <div className={styles.header}>
            <Card
                classTitle="title-blue"
                className={cn(styles.card, className)}
            >
                <div className={styles.body}>
                    <Span
                        title="Fullstack"
                        wipe=" developer"
                        paragraf={content.paragraf}
                        button="Contact me"
                    />
                    <Slidebox/>
                    <div className={styles.bar}>
                        <div className={styles.boxone}>
                            <div className={cn(styles.number, className, {
                            [styles.active]: lightone
                        })}>1</div>
                            <span>Frontend</span>
                        </div>
                        <div className={styles.boxone}>
                            <div className={cn(styles.number, className, {
                            [styles.active]: lighttwo
                        })}>2</div>
                            <span>Backend</span>
                        </div>
                        <div className={styles.boxone}>
                            <div className={cn(styles.number, className, {
                            [styles.active]: lightthree
                        })}>3</div>
                            <span>Security</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Home;