import React from 'react';
import Logo from '../../assets/logo.png';
import './menu.css';
import { Link } from 'react-router-dom';

export default function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Ludoflix Logo"/>
            </Link>
            <Link className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Link>
        </nav>
    );
}