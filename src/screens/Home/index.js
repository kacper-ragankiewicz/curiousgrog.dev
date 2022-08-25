import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

// components
import Slidebox from "../../components/Slidebox";
import Span from "../../components/Span";
import Bar from "../../components/Bar";
import Selector from "../../components/Selector";

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
            {/* <Selector /> */}
        </div>
    );
}
export default Home;