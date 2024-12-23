/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import SubHeader from '../SubHeader'

import Features from "../Home/Features"
import SubHeader from '../SubHeader'
import { CartProvider } from 'react-use-cart'

// import Features from '../Home/Features'
// import SubHeader from '../SubHeader'

const AboutPage = () => {
  return (
    <CartProvider>
        <SubHeader/>
        <Features/>
    </CartProvider>
  )
}

export default AboutPage;