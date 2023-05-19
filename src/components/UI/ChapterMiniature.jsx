import React from 'react';

import styles from './ChapterMiniature.module.css'

const ChapterMiniature = (props) => {

    const selectChapterHandler = () => {
        props.selectedChapter(props.number);
    }

    return ( 
        <>
            <div key={props.key} className={styles.chapterMiniature} onClick={selectChapterHandler}>
                <div className={styles.chaptNumber}>{props.number > 0 ? `Capítulo ${props.number} - ` : ''}</div>
                <div className={styles.chaptTitle}>{props.title}</div>
            </div>
        </> 
    );
}
 
export default ChapterMiniature;