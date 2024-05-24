import React from 'react'
import './Home.css'
import Carrossel1 from '../assets/carrossel-1.png'
import Carrossel2 from '../assets/carrossel-2.png'
import Carrossel3 from '../assets/carrossel-3.png'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import sectionBanner1 from '../assets/home-section1.png'
import sectionBanner2 from '../assets/home-section2.png'

import cardHome1 from '../assets/card-home1.png'
import cardHome2 from '../assets/card-home2.png'
import cardHome3 from '../assets/card-home3.png'
import cardHome4 from '../assets/card-home4.png'


import iFood from '../assets/ifood-banner.png'




function Home() {
  return (

    <>

      <div className="container-fluid p-0 animate__animated animate__fadeInLeft animate__delay-1s">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {Carrossel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Carrossel2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Carrossel3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>



      <div className="container pt-4 p-0 animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="row">
          <div className="col-sm p-0">
            <div className="welcome">
              <h4 className='text-center text-justify'>Bem vindos à <span className='bvegan-logonome'>BVegan</span><span className='bvegan-logonomered'> Food</span></h4>
              <p className='content-welcome pt-3 pb-4'>Receitas minuciosamente desenvolvidas ao longo dos anos e aprimoradas diariamente, a cada entrega. Tudo aqui é preparado artesanalmente e com amor. Encomende nossos deliciosos bolos temáticos, delicie-se com nossos docinhos para aniversários e ocasiões especiais, se dê um pequeno prazer no meio da tarde com nossos macarons e cupcakes! Todos os nossos produtos são cruelty free, pode se deliciar sem peso na consciência.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-0 pt-5 animate__animated animate__fadeInLeft animate__delay-2s">
        <div className="row">
          <div className="col-sm-8 p-0 section1">
            <img src={sectionBanner1} alt="" />
          </div>
          <div className="col-sm-4 section1-content p-0">
            <div class="d-flex align-items-center" style={{ height: "100%" }}>
              <div className='d-block w-100'>
                <h5>Conheça nossa linha de doces</h5>
                <p className='justify-paragrafo'>
                  Brigadeiros deliciosos, trufas, tortas, brownies recheados, bombons e muito mais! Perfeitos para um café no meio da tarde para tornar o seu dia, seu evento ou aniversário inesquecível, sempre ressaltando, todos são cruelty free!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0 pt-5 animate__animated animate__fadeInLeft animate__delay-2s">
        <div className="row">
          <div className="col-sm-4 p-0 section1-content">
            <div class="d-flex align-items-center" style={{ height: "100%" }}>
              <div className='d-block w-100'>
                <h5>Conheça nossa linha de doces</h5>
                <p className='justify-paragrafo'>
                  Brigadeiros deliciosos, trufas, tortas, brownies recheados, bombons e muito mais! Perfeitos para um café no meio da tarde para tornar o seu dia, seu evento ou aniversário inesquecível, sempre ressaltando, todos são cruelty free!</p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 p-0 m section1 text-end">
            <img src={sectionBanner2} alt="" />
          </div>
        </div>
      </div>



      <div className="container p-0 pt-5 mt-1 animate__animated animate__fadeInLeft animate__delay-3s">
        <div className="row">
          <div className="produtos-home pb-5">
            <p className='paragraph-home-final text-center justify-paragrafo'>conheça um pouquinho do que nós fazemos aqui pela <span className='bvegan-logonome'>BVegan</span>!</p>
          </div>
          <div className="col-sm-3 cards-home p-5">
            <img src={cardHome1} alt="" className='w-100' />
            <p className='info-produto-home pt-2 text-start'>Torta Crumble de morango</p>
            <p style={{ color: '#d15e5e', fontWeight: 600, fontSize: 20 }}>R$ 100,00</p>
          </div>
          <div className="col-sm-3 cards-home p-5">
            <img src={cardHome2} alt="" className='w-100' />
            <p className='info-produto-home pt-2 text-start'>Torta Crumble de Maçã</p>
            <p style={{ color: '#d15e5e', fontWeight: 600, fontSize: 20 }}>R$ 100,00</p>
          </div>
          <div className="col-sm-3 cards-home p-5">
            <img src={cardHome3} alt="" className='w-100' />
            <p className='info-produto-home pt-2 text-start'>Bolo de brigadeiro com Limão Siciliano com Morango</p>
            <p style={{ color: '#d15e5e', fontWeight: 600, fontSize: 20 }}>R$ 100,00</p>
          </div>
          <div className="col-sm-3 cards-home p-5">
            <img src={cardHome4} alt="" className='w-100' />
            <p className='info-produto-home pt-2 text-start'>Kit festas Médio - sem Glúten Serve até 20 pessoas</p>
            <p style={{ color: '#d15e5e', fontWeight: 600, fontSize: 20 }}>R$ 100,00</p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 p-0 pt-5 mt-5">
        <div className="row pt-5 mt-5">
          <div className="col-sm">
            <div className="ifood">
              <a className='ifood-teste' href="">
                <img src={iFood} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home



{/* <div className="col-sm mt-5">
            <div className="cont-final text-center">
              <p className='paragraph2'>SEJA MAIS FELIZ E DE FORMA SAUDÁVEL, SEM SAIR DA FAMOSA "DIETA" FAÇA SUA ENCOMENDA JÁ!</p>
              <h3 className='text-center'>entregas e formas de pagamento</h3>
              <p className='paragraph'>Trabalhamos com delivery ou retirada. Faça seu pedido via nossa rede principal de contato, <span><a href="">
                <img className='img-whatsapp' src={whatsappIcon} alt="" /></a></span></p>
              <p className='paragraph'>Principais formas de pagamento aceitas: </p>
              <span className='w-100'><img className='w-25' src={pagamentos} alt="" /></span>
            </div>
          </div> */}