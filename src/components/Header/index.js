import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// import cn from "classnames";
import styles from "./Header.module.sass";

import Contact from "./Contact";
import Who from "./Who"

const Header = ({onOpen}) => {
    const [visible, setVisible] = useState(false);

    console.log(visible)

    return (
        <header className={styles.header}>
            <div className={styles.control} onClick={() => setVisible(false)}>
                <Contact className={styles.contact} />
                <Who className={styles.who} />
            </div>
        </header>
    );
};

export default withRouter(Header);