import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext();
  const dislpaySubmenu=(e)=>{
    const page=e.target.textContent;
    const tempBtn=e.target.getBoundingClientRect();
    const center=(tempBtn.left+tempBtn.right)/2;
    const bottom=tempBtn.bottom-3;
    openSubmenu(page,{center,bottom});
  }
  return <nav className='nav'>
    <div className="nav-center">
      <div className="nav-header">
       <img src={logo} className='nav-logo' alt="stripe" />
       <button className='btn toggle-btn' onClick={openSidebar}>
         <FaBars/>
       </button>
      </div>
       <ul className="nav-links">
          <li>
            <button className='link-btn' onMouseOver={dislpaySubmenu}>
              products
            </button>
          </li>
          <li>
             <button className='link-btn' onMouseOver={dislpaySubmenu}>
              developers
            </button>
          </li>
          <li>
             <button className='link-btn' onMouseOver={dislpaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
    </div>
    </nav>
}

export default Navbar
