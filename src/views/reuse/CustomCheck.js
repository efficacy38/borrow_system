import React from 'react';
import styles from './CustomCheck.module.css';


function CustomCheck({value, disabled, onChange}) {
    console.log(value)
    return (
        <div className={styles.customCheck}>
            <label for="box-1" className={`${value ? styles.checked : ""} ${!!disabled ? styles.disabled : ""}`}>Sustainable typewriter cronut
            <input type="checkbox" id="box-1" value={value}/>
            </label>
        </div>
    )
}

export default CustomCheck
