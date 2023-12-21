

import React, {useState} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import MenCollections from './components/MenCollections'
import Footer from './components/Footer'
import WomensCollections from './components/WomensCollections'

import {Gents,Womens} from '../data'

const Mainpage = () => {

  const [gentsFashion] = useState(Gents)

  const [womensFashion] = useState(Womens)

  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <MenCollections gentsFashion = {gentsFashion} />
        <WomensCollections womensFashion = {womensFashion} />
        <Footer />


    </div>
  )
}

export default Mainpage