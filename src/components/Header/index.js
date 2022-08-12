import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.sass";

import Item from "./Item";
import Logo from "./Logo";


const Header = ({onOpen}) => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.body}>
                <Logo/>
                <div className={styles.controler}>
                    <ul className={styles.navitem}>
                        <Item icon="About"/>
                        <Item icon="Github"/>
                        <Item icon="Contact"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default withRouter(Header);