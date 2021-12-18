import Decider from "../../components/form/Decider"
import Header from "../../components/form/header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState } from "react"


function Acne() {

    const health1 = [
        'Clindamycin',
        'Lincomycin',
        'Benzoyl peroxide'
    ]
    const health2 = [
        'I take neostigmine or pyridostigmine (used for conditions such as Myasthenia Gravis)',
        'I am likely to have an operation whilst I am on Duac',
        'I was hoping to get Oral Typhoid vaccine whilst on Duac'
    ]
    const health3 = [
        'a rare hereditary disease affecting haemoglobin'
    ]

    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }
    return (
        <div id={styles.formContainer}>
            <form>
                {/* about you section */}
                <Header text={'ABOUT YOU'}/>
                <Question text={'Have you previously been diagnosed with mild to moderate acne by a medical doctor?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Please provide more information*'}/>


                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Are you allergic to any of the following?'}/>
                <Decider name={randomName()}/>
                <List listItems={health1}/>

                <Question text={'Do any of the following apply to you:'}/>
                <Decider name={randomName()}/>
                <List listItems={health2}/>

                <Question text={'Are you pregnant, planning on becoming pregnant, or breastfeeding?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Please provide more information*'}/>

                <Question text={'Do you have acute porphyria?'}/>
                <Decider name={randomName()}/>
                <List listItems={health3}/>
                <Comment label={'Please provide more information*'}/>

                <Question text={'Do you currently have sunburn?'}/>
                <Decider name={randomName()}/>
                <AlertText text={'You must wait for your sunburn to completely resolve before starting your treatment.'}/>

            </form>
        </div>
    )
}

export default Acne
