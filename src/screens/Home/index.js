import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

import Card from "../../components/Card";
import photo from "../../assets/img/photo2.jpg";

const Home = ({ className }) => {

    return (
        <div className={styles.header}>
            <Card
                classTitle="title-blue"
                className={cn(styles.card, className)}
            >
                <div className={styles.body}>
                    <span className={styles.span}>Fullstack developer</span>
                    <p className={styles.paragraf}>
                        This is my website, here you can learn some useful informations about me.
                        I am always trying to learn new things and I am always trying to improve my skills.
                    </p>
                    <button className={styles.button}>
                        <a href="/" className={styles.link}>
                            Contact me
                        </a>
                    </button>
                    <div className={styles.photo1}>
                        <img src={photo}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Home;