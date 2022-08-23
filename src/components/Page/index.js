import React from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";

// components
import Header from "../Header";

const Page = ({ wide, children, title, className }) => {
  const [visible, setVisible] = React.useState(true);

  if (visible === true)
    setTimeout(() => {
      setVisible(false);
    }, 1000);

  return (
    <>
      {/* Loadding view */}
      {/* <div className={cn(styles.loader, className, { [styles.loading]: visible })}>
                <div className={styles.object}>
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="<http://www.w3.org/2000/svg>"
                    >
                        <circle
                            cx="12" cy="12" r="8"
                            stroke-width="4" stroke="green"
                            fill="none"
                        />

                    </svg>
                </div>
            </div> */}
      <div className={styles.page}>
        <Header className={styles.header} />
        <div
          className={cn(styles.container, {
            [styles.wide]: wide,
          })}
        >
          {title && <div className={cn("h3", styles.title)}>{title}</div>}
          {children}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.body}></div>
      </footer>
    </>
  );
};

export default withRouter(Page);
