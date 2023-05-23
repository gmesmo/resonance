import React from 'react';

import styles from './Capitulo.module.css';
import Typewriter from "typewriter-effect";

import DateCheck from '../UI/DateCheck/DateCheck';

const Capitulo = (props) => {
    const Texto = props.text.map((text) =>
        <Typewriter options={{delay: 0.001}} onInit={(typewriter) => {
            typewriter.pauseFor(3000).typeString(text).start();
        }}/>
    );

    const chaptNumber = props.chaptNumber - 1;


    return (    <section key={props.chaptNumber} className={<DateCheck data={props.data} /> ? `${styles.new}` : 'old'}>
                    <h2>{chaptNumber > 0 ? `Capítulo ${chaptNumber} - ` : ``} {props.title}</h2>
                    <h5>Lançamento: {props.data}</h5>
                    <div className={styles.chapt}>
                        {Texto}
                    </div>
                </section> 
            );
}
 
export default Capitulo;