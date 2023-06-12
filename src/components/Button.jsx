import React from 'react'

const Button = ({buttonDeyeri, icon }) => {
  return (
     //  Sertli Render Etme

     <a href='https://youtu.be/kjPMWOoQmN0 ' target='blank' className='my-custom-btn text-white mt-2 me-3'>{icon && <img src={icon} />} {buttonDeyeri}</a>

  )
}

export default Button