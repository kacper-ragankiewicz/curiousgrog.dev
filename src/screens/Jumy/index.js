import React from "react";
import cn from "classnames"
import styles from "./Jumy.module.sass";


const ko = [
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

const sn = [
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

const ob = [
    {
        name: "Makaron z sosem serowym",
        type: "o",
        day: true,
        content: ["500g makaron", "80g ser głodniaki", "200g śmietana 30%", "30g peczarki", "5g oleju"]
    },
    {
        name: "Makaron Pesto",
        day:true,
        type: "o"
    },
    {
        name: "Makaron z Cukinią",
        day: true,
        type: "o"
    },
    {
        name: "Czulent",
        day: true,
        type: "o"
    },
    {
        name: "Pieczone ziemniaki z mięsem",
        day: false,
        type: "o"
    },
    {
        name: "Kluski Ziemniaczane",
        day: true,
        type: "o"
    },
    {
        name:"Chinszczyzna",
        day: true,
        type: "o"
    }
]

const Jumy = ({ className }) => {
    const [visible, setVisible] = React.useState(false);
    const [snPo, setSnPo] = React.useState(0);
    const [obPo, setObPo] = React.useState(0);
    const [koPo, setKoPo] = React.useState(0);
    const [snWt, setSnWt] = React.useState(0);
    const [obWt, setObWt] = React.useState(0);
    const [koWt, setKoWt] = React.useState(0);
    const [snSr, setSnSr] = React.useState(0);
    const [obSr, setObSr] = React.useState(0);
    const [koSr, setKoSr] = React.useState(0);
    const [snCz, setSnCz] = React.useState(0);
    const [obCz, setObCz] = React.useState(0);
    const [koCz, setKoCz] = React.useState(0);
    const [snPi, setSnPi] = React.useState(0);
    const [obPi, setObPi] = React.useState(0);
    const [koPi, setKoPi] = React.useState(0);
    const [snSo, setSnSo] = React.useState(0);
    const [obSo, setObSo] = React.useState(0);
    const [koSo, setKoSo] = React.useState(0);
    const [snNi, setSnNi] = React.useState(0);
    const [obNi, setObNi] = React.useState(0);
    const [koNi, setKoNi] = React.useState(0);

    function Random(min, max, rand) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return rand(Math.floor(Math.random() * (max - min + 1)) + min)

    }


    return (
        <div className={styles.header}>
            <div
                className={styles.wrapper}
            >
                <div className={styles.body}>
                    <div className={styles.box}>
                        <span>Pon</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snPo].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obNi].day === true ? ob[obNi].name : ob[obPo].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koPo].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Wto</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snWt].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obWt].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koWt].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Sr</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snSr].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obSr].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koSr].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Czw</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snCz].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obCz].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koCz].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Pia</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snPi].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obPi].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koPi].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Sob</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snSo].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obSo].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koSo].name}</div>
                    </div>
                    <div className={styles.box}>
                        <span>Nie</span>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{sn[snNi].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ob[obNi].name}</div>
                        <div className={cn(styles.boxer, className, { [styles.refresh]: visible })}>{ko[koNi].name}</div>
                    </div>
                </div>
                <button
                    className={styles.button}
                    onClick={()=> {
                        setVisible(true)
                        Random(0,[sn.length-1],setSnPo)
                        Random(0,[ob.length-1],setObPo)
                        Random(0,[ko.length-1],setKoPo)
                        Random(0,[sn.length-1],setSnWt)
                        Random(0,[ob.length-1],setObWt)
                        Random(0,[ko.length-1],setKoWt)
                        Random(0,[sn.length-1],setSnSr)
                        Random(0,[ob.length-1],setObSr)
                        Random(0,[ko.length-1],setKoSr)
                        Random(0,[sn.length-1],setSnCz)
                        Random(0,[ob.length-1],setObCz)
                        Random(0,[ko.length-1],setKoCz)
                        Random(0,[sn.length-1],setSnPi)
                        Random(0,[ob.length-1],setObPi)
                        Random(0,[ko.length-1],setKoPi)
                        Random(0,[sn.length-1],setSnSo)
                        Random(0,[ob.length-1],setObSo)
                        Random(0,[ko.length-1],setKoSo)
                        Random(0,[sn.length-1],setSnNi)
                        Random(0,[ob.length-1],setObNi)
                        Random(0,[ko.length-1],setKoNi)
                        }
                    }
                >
                    Spin
                </button>
                <div className={styles.content}>
                    <div>
                        <span>Lista zakupów</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Jumy;