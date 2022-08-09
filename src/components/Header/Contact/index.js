import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Contact.module.sass";

import Item from "./Item";

const infos = [
  {
    title: "tel.",
    content: "+48 662 383 023",
    icon: "/img/content/phone-cell.jpg",
  },
  {
    title: "email",
    content: "kacper-ragankiewicz@wp.pl",
    icon: "../../../assets/img/content/email.png",
  },
];

const Contact = ({ className }) => {
    const [visible, setVisible] = useState(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(styles.menu, className, {
                [styles.active]: visible,
                })}
                >
                <button
                    className={cn(styles.head, styles.active)}
                    onClick={() => setVisible(!visible)}
                >
                    <span className={styles.contact}>Contact</span>
                </button>
                <div className={styles.body}>
                    <div className={styles.top}>
                        <div className={styles.list}>
                            {infos.map((x, index) => (
                                <Item
                                    className={cn(styles.item, className)}
                                    item={x}
                                    key={index}
                                    onClose={() => setVisible(false)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}
export default Contact;