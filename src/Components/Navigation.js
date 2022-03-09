import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'

const Navigation = () => {
  return (
    <NavigationStyled>
        <div className="avatar">
            <img src={avatar} alt=""/>
        </div>
        <ul className="nav-items">
              <li className="nav-item">
                  <NavLink 
                  to="/" activeClassName="active" exact> Home                     
                  </NavLink>
              </li>  
              <li className="nav-item">
                  <NavLink 
                  to="/about" activeClassName="active" exact> About                     
                  </NavLink>
              </li> 
              <li className="nav-item">
                  <NavLink 
                  to="/resume" activeClassName="active" exact> Resume                     
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink 
                  to="/portfolio" activeClassName="active" exact> Portfolio                     
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink 
                  to="/contact" activeClassName="active" exact> Contact                     
                  </NavLink>
              </li>
              
        </ul>
        <footer className="footer">
            <p>@2022 Pakawat Noosaard</p>
        </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`

`;

export default Navigation