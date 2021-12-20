import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState } from "react"
import SubmitBtn from "../../components/form/submitBtn"

function AcidReflux() {

    const symptomList1 = [
        'Heartburn - a burning feeling in the chest just behind the breastbone that occurs after eating and lasts a few minutes to several hours',
        'Chest pain, especially after bending over, lying down or eating',
        'Burning in the throat, or hot, sour, acidic or salty-tasting fluid at the back of the throat',
        'Feeling of food "sticking" in the middle of the chest or throat'
    ]
    const symptomList2 = [
        'difficulty swallowing',
        'unintentional weight loss',
        'abdominal swelling',
        'persistent vomiting',
        'severe/persistent diarrhoea',
        'vomiting blood',
        'blood in your stools or black, tarry stools',
        'have iron deficiency anaemia',
        'severe liver problems'
    ]
    const healthList1=[
        'Osteoporosis',
        'Liver problems',
        'Gastric cancer',
        'Hypomagnesaemia (low magnesium in the blood)'
    ]
    const medicationList = [
        'NSAID anti-inflammatory painkillers (e.g. ibuprofen)',
        'Ketoconazole, itraconazole, posaconazole or voriconazole (used to treat infections caused by a fungus)',
        'Digoxin (used to treat heart problems)',
        'Diazepam (used to treat anxiety, relax muscles or in epilepsy)',
        'Ulipristal (used as emergency contraception or treatment for fibroids)',
        'Phenytoin or Fosphenytoin (used in epilepsy)',
        'Medicines that are used to thin your blood, such as warfarin or other vitamin K blockers',
        'Rifampicin (used to treat tuberculosis)',
        'Atazanavir, Rilpivirine, Tipranavir, Saquinavir, Nelfinavir, Raltegravir (used to treat HIV infection)',
        'Ledipasvir (used for Hepatitis C treatment)',
        'Ciclosporin or Tacrolimus (in cases of organ transplantation)',
        "St John's wort (Hypericum perforatum) (used to treat mild depression)",
        'Cilostazol (used to treat intermittent claudication)',
        'Clopidogrel (used to prevent blood clots (thrombi))',
        'Vitamin B12, Cyanocobalamin, Hydroxocobalamin',
        'Erlotinib, Dabrafenib, Lapatinib or Pazopanib (for cancer treatment)',
        'Clarithromycin (an antibiotic)',
        'Methotrexate (for cancer or rheumatoid arthritis treatment)',
        'Escitalopram (an antidepressant)',
        'Clozapine (for schizophrenia)'
    ];

    const agreementList1 = [
        'You will read the patient information leaflet supplied with your medication',
        'You will contact us and inform your GP of your medication if you experience any side effects of treatment, if you start a new medication or if your medical conditions change during treatment.',
        'The treatment is solely for your own use',
        'You give permission to access you NHS Summary Care Record in order to identify you correctly, check your medical history and provide the best possible care.',
        'You give permission to contact your GP to inform them of your treatment.',
        'You have answered all the above questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.'
    ]

    const [symptom1,setSymptom1]= useState(null);
    const [symptom2,setSymptom2]= useState(null);
    
    const [health1,setHealth1]= useState(null);
    const [health2,setHealth2]= useState(null);
    const [health3,setHealth3]= useState(null);
    
    const [medication1,setMedication1]= useState(null);
    const [medication2,setMedication2]= useState(null);

    const [agreement1,setAgreement1] = useState(null)
    const [agreement2,setAgreement2] = useState(null)
    const [agreement3,setAgreement3] = useState(null)

    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }


    return (
        <div id={styles.formContainer}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <Header text={'YOUR SYMPTOMS'}/>
                <Question text={'Are you experiencing acid reflux at least twice a week?'}/>
                <Decider setState={setSymptom1} name={randomName()}/>
                <Question text={'Symptoms include:'}/>
                <List listItems={symptomList1}/>
                {symptom1===false && <>
                    <Comment label={'Please provide more details *'}/>
                </>}

                <Question text={'Are you experiencing any of the following?'}/>
                <Decider setState={setSymptom2} name={randomName()}/>
                <List listItems={symptomList2}/>
                {symptom2 && <>
                    <Comment label={'Please provide more details *'}/>
                </>}
                <Line/>
                
                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Do you have an allergy (hypersensitivity) to medicines containing proton pump inhibitors (e.g.omeprazole, pantoprazole, lansoprazole, rabeprazole, esomeprazole)?'}/>
                <Decider setState={setHealth1} name={randomName()}/>
                {health1 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                
                <Question text={'Are you breastfeeding or pregnant or possibly pregnant?'}/>
                <Decider setState={setHealth2} name={randomName()}/>
                {health2 && (
                    <Comment label={'Please provide more details *'}/>
                )}

                
                <Question text={'Do you have any of the following conditions:'}/>
                <Decider setState={setHealth3} name={randomName()}/>
                <List listItems={healthList1}/>
                {health3 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Line/>


                {/* Medication section*/}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?'}/>
                <Decider setState={setMedication1} name={randomName()}/>
                {medication1 && (
                    <>
                        <Question text={'Are you taking any of the following medications?'}/>
                        <Decider setState={setMedication2} name={randomName()}/>
                        <List listItems={medicationList}/>
                        {medication2===false && (
                            <Comment label={'Please provide more details *'}/>   
                        )}
                    </>
                )}
                <Line/>

                
                {/*  */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you understand that healthy eating, reduced alcohol consumption, a healthy body weight and smoking cessation are advisable?'}/>
                <Decider setState={setAgreement1} name={randomName()}/>
                {agreement1===false && (
                    <AlertText text={'If you need more information on lifestyle advice, please contact our customer service.'}/>
                )}           

                <Question text={'Do you understand that if you experience no relief after 14 days or your symptoms persist after 28 days of treatment you must contact your GP for further diagnosis/treatment?'}/>
                <Decider setState={setAgreement2} name={randomName()}/>           
                {agreement2===false && (
                    <AlertText text={'We are unable to supply you with acid reflux medication for treating other conditions. Please consult your GP for the treatment of any other condition.'}/>
                )}     

                <Question text={'Do you agree with the following?'}/>
                <Decider setState={setAgreement3} name={randomName()}/>
                <List listItems={agreementList1}/>                
                {agreement3===false && (
                    <AlertText text={'We are unable to supply you with acid reflux medication for treating other conditions. Please consult your GP for the treatment of any other condition.'}/>
                )} 
                <SubmitBtn/>                                
            </form>            
        </div>
    )
}

export default AcidReflux
