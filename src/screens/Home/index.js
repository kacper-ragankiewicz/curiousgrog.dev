import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

import Card from "../../components/Card";
import photo from "../../assets/img/photo2.jpg";

const content = {
    paragraf: "This is my website, here you can learn some useful informations about me. I am always trying to learn new things and always trying to improve my skills.",
    button: "Contact me"
};

const Home = ({ className }) => {
    const [boxup, setBoxup] = React.useState(false);

    if(boxup == false || boxup == true) {
        setTimeout(() => {
            setBoxup(!boxup)
        }, 5000);
    }

    return (
        <div className={styles.header}>
            <Card
                classTitle="title-blue"
                className={cn(styles.card, className)}
            >
                <div className={styles.body}>
                    <span className={styles.span}>Fullstack<span className={styles.linearwipe}> developer</span></span>
                    <p className={styles.paragraf}>
                        {content.paragraf}
                    </p>
                    <button
                        className={cn(styles.button, styles.active)}
                        >
                        <a href="#" className={styles.link}>
                            {content.button}
                        </a>
                    </button>
                    <div className={styles.animation}>
                        <div className={styles.wrapper}>
                            <div className={cn(styles.boxone, className, {
                                [styles.boxup]: boxup
                            })}/>
                            <div className={cn(styles.boxtwo, className, {
                                [styles.boxup]: boxup
                            })}/>
                            <div className={styles.boxthree}/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Home;