export async function getStaticPaths(){
    const fs = require('fs');
    const path = require('path');
    const pathDir = path.join(__dirname,'..','..','..','..','data','data.json')
    const data = JSON.parse(fs.readFileSync(pathDir,'utf8')).map(category => ({params:{id:category.id.toString()}}))

    return {
      paths:data,
      fallback:false
    }
}

// import React from 'react'
import styles from '../../styles/treatment.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

function treatment({data}) {
    // console.log(data)

    const route = useRouter();
    function formPage(){
      const names = data.name.split(' ');
      if(names.length>1){
        // let firstL = names[0][0]
        let secondL = names[1][0].toUpperCase()
        // let firstR = names[0].splice(1)
        let secondR = names[1].slice(1).toLowerCase()
        const newWord = names[0].toLowerCase()+secondL+secondR
        
        route.push('/form/'+newWord)
        return
      }
      route.push('/form/'+names[0].toLowerCase())
      // console.log(names[0].toLowerCase())
    }
    return (
      <div id={styles.mainContent}>
          <aside id={styles.asideContent}>
              hellow
          </aside>
          <main>
              <div id={styles.consultSection}>
                  <div id={styles.header}>
                      <h3 onClick={formPage} id={styles.openFormBtn}>START {data.name} CONSULTATION</h3>
                      <p>
                          Dear Guest, click here to login & review a previous health consultation.
                          You will get a free prescription issued by our doctors.
                      </p>
                  </div>
                  <p>
                      <b>Note :</b> By continuing with this order, you confirm that you are over the age of 18 and have the mental capacity to make decisions for your health.If your consultation is approved, you will be offered treatment for you and the prescriber to jointly consider. However, the final decision always will be the prescriber's.
                  </p>
              </div>
              <div id={styles.productSection}>
                  <div className={styles.product}>
                      <Image width={150} height={150} src={'/products/'+data.items[0].imageURL}/>
                      <div className={styles.infor}>
                          <div className="name">
                              <p id={styles.nameOfTreatment}>
                                {data.items[0].treatmentName}
                              </p>
                              <p id={styles.nameOfProduct}>
                                {data.items[0].productName}
                              </p>
                          </div>
                          <div id={styles.quantityContainer}>
                              <span>Quantity :</span> <select id={styles.quantity}>
                                <option value="2">2</option>
                                <option value="2">4</option>
                                <option value="2">8</option>
                              </select>
                          </div>
                          <div id={styles.price}>
                            <p>From R{data.items[0].price}</p>
                          </div>
                          <div id={styles.addToCart}>
                            <button>Add to cart</button>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    )
}

export default treatment




export async function getStaticProps({params}){
    const fs = require('fs');
    const path = require('path');
    const pathDir = path.join(__dirname,'..','..','..','..','data','data.json')
  
    const data = JSON.parse(fs.readFileSync(pathDir,'utf8'))
    const item = data.find(item =>item.id == params.id)
    // console.log(data)
    return {
      props:{data:item}
    }
}