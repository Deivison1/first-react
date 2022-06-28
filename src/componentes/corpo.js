
import React from 'react'
import Dados from './dados'

export default function Corpo(){

    const lojaV = ' Loja Vitual feita em Javascript'
    const crudC = ' Criando um banco de dados com clintes' 
    const imobC = ' Web site responsivo para Corretora de Imoveis '
    return(
        <>
        <section>
            <h2>Análise e Desenvolvimento De Sistemas</h2>
            <p>Olá, meu nome é Deivison Santos, sou desenvolvedor front end, estou em transição de carreira. Sou formado em Análise e Desenvolvimento de Sistemas pela FMU. Esse é o meu portfólio, nele contém algumas de minhas habilidades na programação, como: Criação de Landing pages, Web Pages, Portfólios e aplicações que manipulam dados (CRUD). Usando Git e Github para versionamento e repositório de código.</p>
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