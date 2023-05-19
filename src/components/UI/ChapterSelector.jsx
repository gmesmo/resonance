import React, { useState } from 'react';

import styles from './ChapterSelector.module.css';
import Chapters from '../chapters/list/chapters';
import ChapterMiniature from './ChapterMiniature';

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ChapterSelector = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const selectedChapterHandler = (chapterNumber) => {
        setIsOpen(false);
        props.pageChange(chapterNumber);
    }
    // const chaptersList = JSON.parse(chapters);

    return (
        <div id={styles.Menu} className={isOpen ? styles.active : ''}>
            <div >
                {Chapters.chapters.map((chapt, i) => (
                    <ChapterMiniature key={i} title={chapt.title} number={chapt.number} release={chapt.release} selectedChapter={selectedChapterHandler}/>
                ))}
            </div>
            <button onClick={menuOpenHandler}>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</button>            
        </div>
    );
}
 
export default ChapterSelector;