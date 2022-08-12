import React from "react";
import { withRouter } from "react-router-dom";
// import cn from "classnames";
import styles from "./Page.module.sass";

// components
import Header from "../Header";

const Page = ({wide, children, title, className }) => {

    return (
        <>
        <div className={styles.body}>
            <Header/>
        </div>
        </>
    )
};

export default withRouter(Page);