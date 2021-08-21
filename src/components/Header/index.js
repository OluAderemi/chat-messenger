import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../actions/auth.actions';
import './style.css';
/**
* @author
* @function Header
**/

export const Header = (props) => {

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    // const logout = () => {
    //     dispatch(logout())
    // }

  return(
    <header className="header">
        <div style ={{display: 'flex'}}>
            <div className="logo">Chat Messenger</div>

            {
                !auth.authenticated ?
                <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
            </ul> : null
            }
            
        </div>
            <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
                {auth.authenticated ? `Welcome ${auth.firstName}` : ''}
            </div>
            <ul className="menu">
            {
                auth.authenticated ?  <li>
                    <Link to={'#'} onClick={() => {
                        dispatch(logout(auth.uid))
                    }}>Logout</Link>
                </li> : null
            }
               
            </ul>
    </header>
   )

 }

 export default Header;