import Decider from "../../components/form/Decider"
import Header from "../../components/form/header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState } from "react"


import React from 'react'

function HairLoss() {
    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }
    return (
        <div id={styles.formContainer}>
            <form>
                <Header text={'ABOUT ME'}/>
                <Question text={'Have you previously been diagnosed with mild to moderate acne by a medical doctor?'}/>
                <Decider name={randomName()}/>
            </form>
        </div>
    )
}

export default HairLoss
