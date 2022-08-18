import React from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";

import Item from "./Item";
import Logo from "./Logo";

import list from "../../assets/img/list.png";


const Header = ({ className }) => {
    const [visible,setVisible] = React.useState(false)
    return (
            <nav className={styles.navbar}>
                <div className={styles.body}>
                    <Logo/>
                    <div className={styles.controler}>
                        <ul className={styles.navitem}>
                            <Item/>
                        </ul>
                        {/* Toogling menu */}
                         <div
                            className={cn(styles.object, className, {
                            [styles.active]: visible,
                            })}
                            >
                            <button
                                className={cn(styles.list, styles.active)}
                                onClick={() => setVisible(!visible)}
                                >
                                    <img src={list} alter="List"/>
                            </button>
                            <div className={styles.menu}>
                            <div className={styles.header}>
                                <span className={styles.span}>menu</span>
                            </div>
                            <div className={styles.box}>
                                    <ul className={styles.navitem}>
                                        <Item/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default withRouter(Header);