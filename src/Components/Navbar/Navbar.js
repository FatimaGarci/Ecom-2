import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header class="header">
            <h1 class="logo"><a href="index.html">Unique Beauty</a></h1>
            <ul class="main-nav">
                <li>
                    <Link to="/home"> Home </Link>
                </li>
                <li>
                    <Link to="/filter"> Products </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
        </header>
    )
}