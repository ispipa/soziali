import React, {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    const isUser = localStorage.getItem("id")
    const userName = localStorage.getItem("nombre")

    return (
        <div className='content-nav'>
            <div className='nav'>
                <div className='logo'>
                    <Link to={'/'}><h1><span className='welcome'>Soziali</span></h1></Link>
                </div>
                <div className='containMU'>
                    <div className='menu'>
                        <ul>
                            <li><Link to={'/'}>Inicio</Link></li>
                            <li><Link to={'/contacto'}>Contacto</Link></li>
                        </ul>
                    </div>
                    <div className='user'>
                        <div className='userSesion'>
                            {isUser   ? <h4><span className='user-iconA'>{userName[0]}</span><Link id='usuario-link' to={"/perfil"}><p>{userName}</p></Link></h4> : <div><button><Link to="/login">Iniciar sesión</Link></button></div>}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;