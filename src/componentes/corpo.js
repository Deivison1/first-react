
import React from 'react'
import Dados from './dados'

export default function Corpo(){

    const lojaV = ' Loja Vitual feita em Javascript'
    const crudC = ' Criando um banco de dados com clintes' 
    const imobC = ' Corretora de Imoveis '
    return(
        <>
        <section>
            <h2>Análise e Desenvolvimento De Sistemas</h2>
            <p>Portfólio em feito em React</p>
            <p>Abaixo estão meus projetos Utilizando React.Js</p>
            <Dados
               Loja={lojaV}
               Crud={crudC}
               Imob={imobC} />
        </section>
        </>
    )
}