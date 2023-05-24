import React from 'react';

import styles from './ChapterMiniature.module.css'
import NumberVerify from './NumberVerify';
import DateCheck from './DateCheck/DateCheck';

const ChapterMiniature = (props) => {

    const selectChapterHandler = () => {
        props.selectedChapter(props.number);
    }

    return ( 
        <>
            <button key={props.number} className={`${styles.chapterMiniature} ${<DateCheck data={props.release} /> ? `${styles.new}` : ''}`} onClick={selectChapterHandler}>
                <NumberVerify className={styles.chaptNumber} number={props.number}>
                    Capítulo - {props.number}
                </NumberVerify>

                {props.title}
                {/* <NumberVerify className={styles.chaptNumber} number={props.number}>
                    Capítulo {props.number} - 
                </NumberVerify> */}
                {/* <div className={styles.chaptNumber}>{props.number > 0 && `Capítulo ${props.number} - `}</div> */}
                {/* <div className={styles.chaptTitle}>{props.title}</div> */}
            </button>
        </> 
    );
}
 
export default ChapterMiniature;