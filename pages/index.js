import Navbar from '../components/Navbar'
import IntroComponent from '../components/introComponent'
import CategorySection from '../components/CategorySection'

import Head from 'next/head'


export default function Home({data}) {

  // console.log(data)
  return (
      <>
      <Head >
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Online Doctor</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </Head>
      <IntroComponent/>
      <CategorySection data={data}/>
      </>
  )
}



export async function getStaticProps(){
  const fs = require('fs');
  const path = require('path');
  const pathDir = path.join(__dirname,'..','..','..','data','data.json')

  const data = fs.readFileSync(pathDir,'utf8')

  return {
    props:{data:JSON.parse(data)}
  }
}