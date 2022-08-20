import React from "react";
import cn from "classnames";
import styles from "./Slidebox.module.sass";

const Slidebox = ({ className }) => {
    const [boxup, setBoxup] = React.useState(false);

    if(boxup == false || boxup == true) {
        setTimeout(() => {
            setBoxup(!boxup)
        }, 3000);
    }

    return (
        <div className={styles.animation}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={cn(styles.line, className, { [styles.color]: boxup })}>
                         <div className={cn(styles.boxone, className, {
                        [styles.boxup]: boxup
                    })}/>
                    <div className={cn(styles.boxtwo, className, {
                        [styles.boxup]: boxup
                    })}/>
                    <div className={cn(styles.boxthree, className, {
                        [styles.boxup]: boxup
                    })}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slidebox;