import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

import Card from "../../components/Card";
import Slidebox from "../../components/Slidebox";
import Span from "../../components/Span";
import Bar from "../../components/Bar";

const content = {
    paragraf: "This is my website, here you can learn some useful informations about me. I am always trying to learn new things and always trying to improve my skills.",
    bar: ["Frontend", "Backend", "Security"]
};

const Home = ({ className }) => {

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
                </div>
                <Bar
                    one={content.bar[0]}
                    two={content.bar[1]}
                    three={content.bar[2]}
                />
            </Card>
        </div>
    );
}
export default Home;