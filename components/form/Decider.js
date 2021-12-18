// import React from 'react'
import styles from '../../styles/form.module.css'

function Decider({setState,name}) {

    return (
        <div id={styles.decider} >
            <label onClick={()=>setState(true)} id={styles.yesLabel} htmlFor={name+'yes'}>
                <input name={name} type="radio" id={name+'yes'} value='yes'/>
                <span>YES</span>
            </label>
            <label onClick={()=>setState(false)} id={styles.noLabel} htmlFor={name+'no'}>
                <input name={name} type="radio" id={name+'no'} value='no'/>
                <span>NO</span>
            </label>
        </div>
    )
}

export default Decider
