import React from 'react'
import logo from './imgs/foto-perfil.png'

export default function Header(){
    return(
        <>
           <header>
            <h1>Deivison Santos</h1>
            <p>Front End Developer</p>
            <img src={logo}/>

            <nav class="nav-menu">
                <ul class="nav-list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Habilidades</a></li>
                    <li><a href="">projetos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
              
           </header>
        </>
    )
}