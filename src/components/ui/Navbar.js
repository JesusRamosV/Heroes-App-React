import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { NavItem } from './NavItem';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);
      
    const navigate = useNavigate();
    const handleLogaut = () => {
        
        dispatch({
            type: types.logout,
        })

        navigate('/login', {
            replace: true
        })
    }

    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavItem value="dc" />
                    <NavItem value="marvel" />
                    <NavItem value="search" />

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'> {user.name} </span>
                    <button 
                        className="nav-item nav-link btn"
                        to="/login"
                        onClick={handleLogaut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
