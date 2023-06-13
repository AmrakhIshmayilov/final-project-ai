import React from 'react'

const Button = ({buttonDeyeri, icon }) => {
  return (
     //  Sertli Render Etme

     <a href='##' className='my-custom-btn text-white mt-2 me-3'>
      {icon && <img src={icon} alt='' />} {buttonDeyeri}
      </a>

  )
}

export default Button