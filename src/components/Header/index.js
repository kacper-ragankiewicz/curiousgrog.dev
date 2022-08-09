import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";

import Contact from "./Contact";

const Header = ({onOpen}) => {
    const [visible, setVisible] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.control} onClick={() => setVisible(false)}>
                <Contact className={styles.control} />
            </div>
        </header>
    );
};

export default withRouter(Header);