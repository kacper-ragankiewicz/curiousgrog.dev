import React from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";

import Item from "./Item";
import Logo from "./Logo";

import list from "../../assets/img/list.png";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
    }

    render() {
        return(
            <nav>
                <div className={styles.body}>
                    <Logo/>
                    <div className={styles.controler}>
                            <ul className={styles.navitem}>
                                <Item/>
                            </ul>

                            {/* Toogling menu */}
                        <div className={cn(styles.object, {
                        [styles.active]: this.state.visible})}
                        >
                            <button className={cn(styles.list)}
                            onClick={() => this.setState({visible: !this.state.visible})}
                            >
                                <img src={list} alt="Lista"/>
                            </button>
                            <div className={styles.menu}>
                                <div className={styles.header}>
                                    <span>menu</span>
                                </div>
                                <div className={styles.box}>
                                        <ul className={styles.navitem}>
                                            <Item />
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);