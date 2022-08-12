import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";

import Card from "../../components/Card";

const Home = ({ className }) => {

    return (
        <div className={styles.header}>
            <Card
                classTitle="title-blue"
                className={cn(styles.card, className)}
            >
                <span>Hello</span>
            </Card>
        </div>
    );
}
export default Home;