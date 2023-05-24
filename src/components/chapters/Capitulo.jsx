import React, { useState } from 'react';

import styles from './Capitulo.module.css';
import Typewriter from "typewriter-effect";

import DateCheck from '../UI/DateCheck/DateCheck';

import moment from 'moment';

moment.locale('pt-br');

const Capitulo = (props) => {
    const [skip, setSkip] = useState(false);

    

    let Texto = props.text.map((text) =>
        <Typewriter key={'typping'} options={{delay: 0.001}} onInit={(typewriter) => {
            typewriter.pauseFor(3000).typeString(text).start();
        }}/>
    );

    if (skip) {
        console.log(skip);

        Texto = props.text.map((text) =>
            <Typewriter key={'skipped'} onInit={(typewriter) => {
                typewriter.pasteString(text).start();
            }}/>
        );  
    }

    const skipHandler = () => {
        setSkip(true);
    }

    const chaptNumber = props.chaptNumber - 1;

    let data_cap = moment(props.data).format('L');

    return (    <section key={props.chaptNumber} className={<DateCheck data={props.data} /> ? `${styles.new}` : 'old'}>
                    <h2>{chaptNumber > 0 ? `Capítulo ${chaptNumber} - ` : ``} {props.title}</h2>
                    <h5>Lançamento: {data_cap}</h5>
                    <div className={styles.chapt}>
                        {Texto}
                    </div>
                    {
                        !skip && <button className={styles.skip} onClick={skipHandler}>SKIP</button>
                    }
                </section> 
            );
}
 
export default Capitulo;