import React, { useRef } from 'react';
import { ImCross } from 'react-icons/im'
import { AiOutlineBars } from 'react-icons/ai'
import logo from '../assets/images/logo.svg'
import Button from './Button';


const Navbar = () => {
  const overlayMenuRef = useRef()
  function openOverlayMenu(e) {
    const kliklediyimYer = e.target

    if (kliklediyimYer.classList.contains('bars-icon')) {
      overlayMenuRef.current.classList.add('aktiv')
    }

  }





  function closeOverlayMenu(e) {

    const kliklediyimYer = e.target


    if (kliklediyimYer.classList.contains('cross-icon')) {
      overlayMenuRef.current.classList.remove('aktiv')

    }
  }
  //Current
  return (
    <>
      <div className='overlay' ref={overlayMenuRef}>
        <ImCross className='cross-icon' onClick={closeOverlayMenu} />



        <div className='nav-links'>
          <a href="##">Home</a>
          <a href="##">About</a>
          <a href="##">Services</a>
          <a href="##">Blog</a>
          <a href="##">Contact</a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="##"><img src={logo} alt='' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={openOverlayMenu}>
            <AiOutlineBars className='bars-icon' /></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="##">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="##">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="##">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="##">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="##">Contacts</a>
              </li>

            </ul>
             
             <Button  buttonDeyeri='Sign In' />
           


          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;