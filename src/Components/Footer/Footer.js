import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer id="footer">
            <div class="social-media-links">
                <a href="https://www.facebook.com/" class="fa fa-facebook" aria-label="Facebook"></a>
                <a href="https://twitter.com/" class="fa fa-twitter" aria-label="Twitter"></a>
                <a href="https://www.instagram.com/" class="fa fa-instagram" aria-label="Instagram"></a>
                <a href="https://www.youtube.com/" class="fa fa-youtube" aria-label="Youtube"></a>
            </div>
            <div class='footer-text' >
                <div class="copyright" >
                    <p >&copy; 2020 Rossmery Garcia | OFFICIAL STORE. ALL RIGHTS RESERVED.</p>
                </div>
                <div class="footer-links">
                    <Link to="/home">| Home |</Link>
                    <Link to="/filter"> | Products| </Link>
                    <Link to="/contact"> | Contact |</Link>
                    {/* <a href="index.html">| Home page |</a>
                <a href="products.html">Products |</a>
                <a href="contact.html">Contact |</a> */}
                    <a href="">FAQ |</a>
                </div>
            </div>
        </footer>

    )
}