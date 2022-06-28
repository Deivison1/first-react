import React from 'react'


export default function Header(){
    return(
        <>
           <header>
            <div class="titulo">
                <h1>Deivison Santos</h1>
                <p>Front End Developer</p>
            </div>
            

            <nav class="nav-menu">
                <ul class="nav-list">
                    <li class="nav-link"><a href="">Home</a></li>
                    <li class="nav-link"><a href="">Habilidades</a></li>
                    <li class="nav-link"><a href="">Projetos</a></li>
                    <li class="nav-link"><a href="">Contato</a></li>
                </ul>
            </nav>
              
           </header>
        </>
    )
}