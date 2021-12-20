import { useRouter } from "next/router"
import styles from '../../styles/form.module.css'


function SubmitBtn() {
    const route = useRouter();
    function submitHandler(e){
        e.preventDefault()
        console.log(route)
        route.back()
    }
    return (
        <div id={styles.submitBtn}>
            <button onClick={(e)=>{submitHandler(e)}}>Submit
            </button>            
        </div>
    )
}

export default SubmitBtn
