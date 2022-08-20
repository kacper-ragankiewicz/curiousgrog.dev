import React from "react";
import cn from "classnames";
import styles from "./Bar.module.sass";

const Bar = ({ 
    className,
    one,
    two,
    three
 }) => {
    const [lightone, setLightone] = React.useState(true);
    const [lighttwo, setLighttwo] = React.useState(false);
    const [lightthree, setLightthree] = React.useState(false);

    if(lightone == true) {
        setTimeout(() => {
            setLightone(!lightone)
            setLighttwo(!lighttwo)
        }, 1000);
    }
    if(lighttwo == true) {
        setTimeout(() => {
            setLighttwo(!lighttwo)
            setLightthree(!lightthree)
        }, 1000);
    }
    if(lightthree == true) {
        setTimeout(() => {
            setLightthree(!lightthree)
            setLightone(!lightone)
        }, 1000);
    }

    return (
        <div className={styles.bar}>
            <div className={styles.boxone}>
                <div className={cn(styles.number, className, {
                [styles.active]: lightone
            })}>1</div>
                <span>{one}</span>
            </div>
            <div className={styles.boxone}>
                <div className={cn(styles.number, className, {
                [styles.active]: lighttwo
            })}>2</div>
                <span>{two}</span>
            </div>
            <div className={styles.boxone}>
                <div className={cn(styles.number, className, {
                [styles.active]: lightthree
            })}>3</div>
                <span>{three}</span>
            </div>
        </div>
    );
}
export default Bar;