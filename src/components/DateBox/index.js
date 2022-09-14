import React from 'react';
import styles from "./Date.module.sass";

// component
import Box from "../Box";

// scripts
import { Date as days } from "../../scripts/Date";

const DateBox = ({
    className,
    title,
    item,
    date,
}) => {

    return (
        <Box
            title={title}
        >
            <ul className={styles.tech}>
                { item.map((item,index) => (
                        <li key={index}>
                            <p>{item}</p>
                            <p><span>since: </span>{days(new Date(date[index]), new Date())} Months</p>
                        </li>
                    ))
                }
            </ul>
        </Box>
    )
}
export default DateBox;