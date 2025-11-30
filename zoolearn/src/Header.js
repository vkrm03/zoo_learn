import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <nav>
        <div class="logo-container">
            <div class="logo">

            </div>
            <h1><span>Z</span>oolearn</h1>
        </div>
        <div class="nav-content">
            <ul>
                <li><a>Home</a></li>
                <li><a>Learn</a></li>
                <li><a>Taxonomy Tree</a></li>
                <li><a>3D Models</a></li>
                <li><a>Quizzes</a></li>
                <li><a>Badeges</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header