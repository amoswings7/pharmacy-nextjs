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
import { ContextApi } from '../../components/context';
import { useContext, useState } from 'react';

function Treatment({data}) {
    // console.log(data)

    const {carts, setCarts, consultation, cartStorageName} = useContext(ContextApi);
    const [volume, setVolume] = useState(2)

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

    function quantityHandler(amount){
      setVolume(()=>amount)
    }
    function cartHandler(item){
      const obj = {
        imageURL:item.imageURL,
        productName:item.productName,
        price:item.price,
        quantity:volume
      }
      
      if(!carts){
        setCarts(()=>[obj])
        console.log('first one baby')
      }else{
        setCarts(()=>[...carts,obj])
        console.log('just added another')
      }
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
                  {data.items.map((item,index) => (
                      <div key={Math.floor(Math.random()*1000000*35672)} className={styles.product}>
                          <Image alt={item.productName} width={150} height={150} src={'/products/'+item.imageURL}/>
                          <div className={styles.infor}>
                              <div className="name">
                                  <p id={styles.nameOfTreatment}>
                                    {item.treatmentName}
                                  </p>
                                  <p id={styles.nameOfProduct}>
                                    {item.productName}
                                  </p>
                              </div>
                              <div id={styles.quantityContainer}>
                                  <span>Quantity :</span> <select onChange={(e)=>{
                                    const value = e.target.value;
                                    quantityHandler(value)
                                  }} id={styles.quantity}>
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                  </select>
                              </div>
                              <div id={styles.price}>
                                <p>From R{item.price}</p>
                              </div>
                              {(carts !==null && (carts.find(ele => ele.productName===item.productName && ele.imageURL===item.imageURL)) === undefined) && (
                                  <div id={styles.addToCart}>
                                    <button onClick={()=>cartHandler(item)}>Add to cart</button>
                                  </div>
                              )}
                              {carts ===null && (
                                  <div id={styles.addToCart}>
                                    <button onClick={()=>cartHandler(item)}>Add to cart</button>
                                  </div>
                              )}

                              {carts !==null && (carts.find(ele => ele.productName===item.productName && ele.imageURL===item.imageURL)) !== undefined && (
                                  <div id={styles.addToCart}>
                                    <button style={{background:'green'}}>already added</button>
                                  </div>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </main>
      </div>
    )
}

export default Treatment




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