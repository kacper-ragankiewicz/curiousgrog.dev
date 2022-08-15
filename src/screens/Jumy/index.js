import React from "react";
import cn from "classnames"
import styles from "./Jumy.module.sass";

import Card from "../../components/Card";

const kolacja = [
    {
        name: "Baietka Czosnkowa z Humusem",
        type: "k"
    },
    {
        name: "Tosty",
        type: "k"
    },

    {
        name: "Tortilla",
        type: "k"
    },
    {
        name: "Hot-Dogi",
        type: "k"
    },
    {
        name:"Jogurtowo",
        type: "k"
    },
]

const sniadanie = [
     {
        name: "Płatki z mlekiem",
        type: "s"
    },
    {
        name: "Jajecznica z chlebem",
        type: "s"
    },
    {
        name: "Owsianka",
        type: "s"
    },
        {
        name: "Chleb z jajkiem",
        type: "s"
    }
]

const obiad = [
    {
        name: "Makaron z sosem serowym",
        type: "o"
    },
    {
        name: "Makaron Pesto",
        type: "o"
    },
    {
        name: "Makaron z Cukinią",
        type: "o"
    },
    {
        name: "Czulent",
        type: "o"
    },
    {
        name: "Pieczone ziemniaki z mięsem",
        type: "o"
    },
    {
        name: "Kluski Ziemniaczane",
        type: "o"
    },
    {
        name:"Chinszczyzna",
        type: "o"
    }
]

const Jumy = ({ className }) => {
    const [sn, setSn] = React.useState(0);
    const [ob, setOb] = React.useState(0);
    const [ko, setKo] = React.useState(0);

    function Random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return setSn(Math.floor(Math.random() * (max - min + 1)) + min),
                setOb(Math.floor(Math.random() * (max - min + 1)) + min),
                setKo(Math.floor(Math.random() * (max - min + 1)) + min)

    }

    return (
        <div className={styles.header}>
            <Card
                className={styles.card}
            >
                <div className={styles.body}>
                    <div className={styles.box}>
                        <span>Pon</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Wto</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Sro</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Czwa</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Pia</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Sob</span>
                        <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Nie</span>
\                       <div className={styles.boxer}>{sniadanie[sn].name}</div>
                        <div className={styles.boxer}>{obiad[ob].name}</div>
                        <div className={styles.boxer}>{kolacja[ko].name}</div>
                    </div>
                </div>
                <button
                    className={styles.button}
                    onClick={()=> Random(0,3)}
                >
                    Spin
                </button>
            </Card>
        </div>
    )
};
export default Jumy;