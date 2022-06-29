import React from "react";
import './App.css';
import Header from './componentes/header';
import Corpo from "./componentes/corpo";
import Footer from "./componentes/footer";

export default function App(){

  
  //Cada return só pode carregar apenas um componente EX: <section> que contém varios elementos<section/>
  return(
    <>
      <Header />
      <Corpo />
      <Footer />
    </>
  )
}

