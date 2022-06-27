import React from "react";
import Header from './componentes/header'
import Corpo from "./componentes/corpo";
import Dados from "./componentes/dados";


export default function App(){

  
  
  //Cada return só pode carregar apenas um componente EX: <section> que contém varios elementos<section/>
  return(
    <>
      <Header />
      <Corpo />
      
    </>
  )
}

