import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState } from "react"
import RadioList from "../../components/form/RadioList"
import SubmitBtn from "../../components/form/SubmitBtn"

function ErectileDysfunction() {
    
    const [agreement1,setAgreement1] = useState(null)
    
    
    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }
    const healthRadioList1 = [
        'Low (90/60mmHg or lower)',
        'Normal (between 90/60mmHg and 120/80mmHg)',
        'Low (140/90mmHg or higher)'
    ]
    const medicationList1 = [
        'Often taken for chest pain/angina',
        'Can be administered as a spray, tablet or patch.',
        'Include glyceryl trinitrate, isosorbide mononitrate or isosorbide dinitrate'
    ]
    const agreementList1 = [
        'You will read the patient information leaflet supplied with your medication',
        'You will contact us and inform your GP of your medication if you experience any side effects of treatment, if you start a new medication or if your medical conditions change during treatment.',
        'The treatment is solely for your own use',
        'You give permission to access you NHS Summary Care Record in order to identify you correctly, check your medical history and provide the best possible care.',
        'You give permission to contact your GP to inform them of your treatment.',
        'You have answered all the above questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.'
    ]



    return (
        <div id={styles.formContainer}>
            <form>
                <Header text={'ABOUT ME'}/>
                <Question text={'Are you a male between the ages of 18-75?'}/>
                <Decider name={randomName()}/>
                <Comment placeHolder={'What is your biological sex \nWhat is your age?'} label={'Please provide more details *'}/>
                
                
                <Question text={'Do you smoke or drink?'}/>
                <Decider name={randomName()}/>
                <AlertText text={'You are eligible for treatment, however, be aware alcoholic drinks and/or smoking can make erection difficulties worse. You can consult your GP for information on giving up smoking.'}/>



                {/* symptoms section */}
                <Header text={'YOUR SYMPTOMS'}/>
                <Question text={'Do you have any problems getting an erection, or keeping one as long as you want to?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Can you tell us why you’d like to use erectile dysfunction medication? *'}/>



                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'What is your blood pressure?'}/>
                <RadioList list={healthRadioList1} name={randomName()}/>

                <Question text={'Have you been advised to avoid heavy exercise by your GP or other healthcare professionals?'}/>
                <Decider name={randomName()}/>
                <Comment placeHolder={'Why have you been advised to avoid exercise? \nFor how long?\nBy whom?'} label={'Please provide more details *'}/>

                <Question text={'Do you often get breathless or have chest pain when you do light exercise, like walking up stairs?breathless or chest pain a'}/>
                <Decider name={randomName()}/>
                <Comment label={'Please provide more details *'}/>

                <Question text={'Have you seen a doctor about it?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Please provide more details *'}/>

                <Question text={'In the last 6 months, have you been told by a doctor to avoid physical or sexual activity?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Why did the doctor tell you to avoid these activities? *'}/>
                
                <Question text={'Do you suffer from depression that you have not seen your GP about?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Please provide more details *'}/>



                {/* medication section */}
                <Header text={'ABOUT ME'}/>
                <Question text={'Have you used any erectile dysfunction medication before?'}/>
                <Decider name={randomName()}/>

                <Question text={'Did you have any side effects?'}/>
                <Decider name={randomName()}/>
                <Comment label={'What were the side effects'}/>
                <Comment label={'What was the medication and the dose you were on when you had them? *'}/>

                <Question text={'Do you have any allergy to Viagra (sildenafil), Levitra (vardenafil), Spedra (avanafil) or Cialis (tadalafil) or have you experienced any adverse reaction to any erectile dysfunction medication previously?'}/>
                <Decider name={randomName()}/>
                <Comment label={'Which medicines or substances are you allergic to? *'}/>
                <Comment label={'What was the adverse reaction? *'}/>

                <Question text={"Are you taking any medicines known as nitrates (often taken for chest pain/angina) or nitric oxide donors ('poppers')?"}/>
                <Decider name={randomName()}/>
                <List listItems={medicationList1}/>
                <Comment label={'Please provide more details about your medication *'}/>
                <AlertText text={"We do not advise any recreational drug use with PDE 5 inhibitors, but especially nitric oxide donors such as 'poppers' which may lead to a dangerous fall in your blood pressure."}/>


                {/* agrrement section */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you agree with the following?'}/>
                <Decider setState={setAgreement1} name={randomName()}/>
                <List listItems={agreementList1}/>                
                {agreement1===false && (
                    <AlertText text={'You must agree to this before continuing. If you need assistance, please contact our customer service.'}/>
                )} 
                <SubmitBtn/>
           
            </form>
        </div>
    )
}

export default ErectileDysfunction
