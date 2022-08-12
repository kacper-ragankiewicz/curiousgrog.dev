import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.sass";

import Item from "./Item";
import Logo from "./Logo";


const Header = ({onOpen}) => {

    return (
        <nav className={styles.navbar}>
            <Logo className={styles.logo}/>
            <div className={styles.controler}>
                <ul className={styles.navitem}>
                    <Item icon="About"/>
                    <Item icon="Github"/>
                    <Item icon="Contact"/>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Header);