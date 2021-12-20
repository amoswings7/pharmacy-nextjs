// import React from 'react'
import styles from '../../styles/form.module.css'

function RadioList({list,name}) {
    return (
        <div id={styles.radioList}>
            {list.map(item =>{
                const randomID = Math.floor(Math.random()*1000000000).toString()
             return (
                <label key={randomID} htmlFor={randomID}>
                    <input value={item} type="radio" name={name} id={randomID} />
                    <span>{item}</span>
                </label>
             )})
        }  
        </div>
    )
}

export default RadioList
