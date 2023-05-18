import React from 'react';

import styles from './Capitulo.module.css';

const Capitulo = (props) => {
    const Texto = props.text.map((text) =>
        <p>{text}</p>
    );

    return (    <section>
                    <h2>{props.title}</h2>
                    <h5>Lançamento: {props.data}</h5>
                    <div className={styles.chapt}>
                        {Texto}
                    </div>
                </section> 
            );
}
 
export default Capitulo;