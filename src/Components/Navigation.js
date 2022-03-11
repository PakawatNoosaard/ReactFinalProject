import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'
import {useSelector} from 'react-redux'

const Navigation = () => {

    const total = useSelector((state) => state.cartReducer.total)

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
                  to="/product" activeClassName="active" exact> Product                  
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink
                  to="/cart" activeClassName="active">Cart {total} Item(s)
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
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);

    .avatar{
        width: 100%; 
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img{
            width: 90%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        .active{
            background-color: var(--red-color);
        }
        li{
            display: block;
            a{
                display: block;
                padding: 2rem 0;
                position: relative;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    z-index: 3;
                    opacity: 0.21;
                    transition: All 0.4s cubic-bezier(.17,.67,.83,.67)
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }

`;

export default Navigation