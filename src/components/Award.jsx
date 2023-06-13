import React from 'react'

const Award = ({shekil,basliq,metn}) => {
  return (
     <div className='award d-flex flex-column justify-content-center align-items-start col-12 col-md-4 col-lg-2 ms-4 p-4' >
      <img src={shekil} alt='' className='align-self-center '/>
      <h1 className='text-center'>{basliq}</h1>
      <p className='text-center mt-5'>{metn}</p>
    </div>
  )
}

export default Award