import React from 'react';

import styles from './Capitulo.module.css';

const Capitulo = (props) => {
    const Texto = props.text.map((text) =>
        <p>{text}</p>
    );

    const chaptNumber = props.chaptNumber - 1;

    return (    <section>
                    <h2>
                        {chaptNumber > 0 ? 
                            `Capítulo ${chaptNumber} - ` 
                            : ``
                        } {props.title}
                    </h2>
                    <h5>Lançamento: {props.data}</h5>
                    <div className={styles.chapt}>
                        {Texto}
                    </div>
                </section> 
            );
}
 
export default Capitulo;