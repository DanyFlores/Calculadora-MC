import React from 'react'
import logo from '../assets/logo.svg';
const Header = () => {
  return (
    <>
         <nav className="navbar navbar-dark bg-purple">
        <a className="navbar-brand d-flex justify-content-center"><img src={logo} alt="circle"/> <span className='ml-3'>Health OverView</span></a>               
        <a className="navbar-brand"><i className="fas fa-bars"></i></a>       
      </nav>
    </>
  )
}

export default Header