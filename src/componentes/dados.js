import React from 'react';

export default function Dados(props){
    return(
        <>
        <section>
            <p>Loja Virtual:{props.Loja}</p>
            <p>Crud:{props.Crud}</p>
            <p>Imobiliária:{props.Imob}</p>
            
        </section>
        </>
    )
}