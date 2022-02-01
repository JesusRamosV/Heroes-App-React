import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    // const lastPath = localStorage.getItem('lastPath');
    // const search = localStorage.getItem('search')
    // let busqueda = lastPath + search;

    const lastPath = localStorage.getItem('lastPath');
    

    const handleLogin = () => {
       
        dispatch({
            type: types.login,
            payload: {name: 'Jesus'}
        }) 
         navigate(
            lastPath,{
            replace: true
        })
    }

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr/>

            <button 
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
        
    );
};
