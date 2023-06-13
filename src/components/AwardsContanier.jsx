import React from 'react'
import Award from './Award'
// Shekiller 
import service1 from '../assets/images/services/service-1.svg'
import service2 from '../assets/images/services/service-2.svg'
import service3 from '../assets/images/services/service-3.svg'
import service4 from '../assets/images/services/service-4.svg'
import service5 from '../assets/images/services/service-5.svg'

const AwardsContanier = () => {
    return (
        <div className='awards-container row mt-5 pt-5 mx-auto'>
        <Award shekil={service1} 
        metn="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." 
        basliq="Naxly as the Winners in Global Agency Awards"/>
       
        
        <Award shekil={service2} 
        metn="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        basliq="Expert Prespective Agency Awards"/>
       
        <Award shekil={service3} 
        metn="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        basliq="Business Prespective Global Agency Awards"/>
      
        <Award shekil={service4} 
        metn="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        basliq="Value for Results in Global Agency Awards"/>
     
        <Award shekil={service5} 
        metn="Lorem ipsum is plac eholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        basliq="Global Experience in Agency Awards"/>
       
        
        </div>
    )
}

export default AwardsContanier