import React from 'react';
import styles from './mark.module.css';
import logo from '../../../public/MARK.png'

const Cover = () => {
    const LogoCreate = () => {
        return(
            <img src={logo} />
        );
        
    }

    return ( <>
        <section id={styles.cover}>
            <div>
                <div className={styles.logo_}>
                    <LogoCreate />
                    <LogoCreate />
                    <LogoCreate />
                </div>
                <h1>Resonance</h1>
            </div>
            
        </section>
    </> );
}
 
export default Cover;