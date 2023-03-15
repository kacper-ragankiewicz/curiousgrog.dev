import React from "react";
import styles from "./Contact.module.sass";

import Spans from "../../components/Spans";
import Bar from "../../components/Bar";

const Contact = () => {
    return (
        <div className={styles.body}>
            <Spans
                title="Contact"
                desc="The ways to contact me"
                object={['kasper.ragan@gmail.com', 'github: kacper-ragankiewicz']}
                className={styles.spans}
            ></Spans>
            <Bar
                object={['Email','Feedback', 'Work']}
                className={styles.bar}
            />
        </div>
    );
}

export default Contact;

