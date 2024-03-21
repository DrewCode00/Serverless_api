import { useState } from "react";

import styles from'./form.module.css';


export function Form(){
    const [name, setName] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return(
        <>
        
        <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
                Name
            </label>
            <input
            name="name"
            id="name"
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
             <label htmlFor="favoriteColor" className={styles.label}>
                Favorite Color
            </label>
            <input
            name="favoriteColor"
            id="favoriteColor"
            className={styles.input}
            type="text"
            onChange={(e) => setFavoriteColor(e.target.value)}
            value={favoriteColor}
            />
            <button className={styles.button}>Submit</button>
        </form>
        </>
    );
    
}