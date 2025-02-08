import React from 'react'
import'./Header.css'
 
function Header(){
    return   <header>
        <div class="lisbo">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <a href="#"><img src="./logo.png" alt="lisbo-logo"/></a>
             <div class="list">
                <ul>
                    
                <li><a href="#">Demos</a></li>
                <li><a href="#">Demo Logins</a></li>
                <li><a href="#">Installation</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Support</a></li>
                </ul>
             </div>
             <div>
                <button class="apply-btn">Buy Now!</button>
             </div>
                </div>
            </nav>
        </div>
    </div>
    </header>
}
export default Header;