import React from 'react';

export default function Dados(props){
    return(
        <>
        <section class="section-project">
            <div class="caixa-project">
                <div class="projeto">
                    <div class="img-project">
                        <img src=""></img>
                    </div>

                    <p>Loja Virtual:{props.Loja}</p>

                    <button class="btn-detalhes">
                        <a class="link-detalhes" href="">Detalhes</a>
                    </button>

                </div>

                <div class="projeto">

                    <div class="img-project">
                        <img src=""></img>
                    </div>

                    <p>Crud:{props.Crud}</p>

                    <button class="btn-detalhes">
                        <a class="link-detalhes" href="">Detalhes</a>
                    </button>

                </div>

                <div class="projeto">

                    <div class="img-project">
                        <img src=""></img>
                    </div>

                    <p>Imobiliária:{props.Imob}</p>

                    <button class="btn-detalhes">
                        <a class="link-detalhes" href="">Detalhes</a>
                    </button>
                    
                </div>
            </div>
        </section>
        </>
    )
}