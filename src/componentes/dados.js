import React from 'react';

export default function Dados(props){
    return(
        <>
        <section class="section-project">
            <div class="caixa-project">
                <div class="projeto">
                    <img src=""></img>
                    <p>Loja Virtual:{props.Loja}</p>
                    <button><a href="">Detalhes</a></button>
                </div>

                <div class="projeto">
                    <img src=""></img>
                    <p>Crud:{props.Crud}</p>
                    <button><a href="">Detalhes</a></button>
                </div>

                <div class="projeto">
                    <img src=""></img>
                    <p>Imobiliária:{props.Imob}</p>

                    <button><a href="">Detalhes</a></button>
                </div>
            </div>
        </section>
        </>
    )
}