import React from 'react'
import './Bvegan.css'

import BveganLogo from '../assets/logo2.png'

function Bvegan() {
  return (



    <>

    <div className="container-fluid p-0 containerColorBvegan animate__animated animate__fadeInLeft animate__delay-1s">
      <img className='' src={BveganLogo} alt="" />
    </div>


      <div className="container p-0 animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="row pt-4">
          <div className="col-sm p-0 cont-bvegan">
            <h2>Conheça um pouco mais sobre a BVegan</h2>
            <h4 className='pt-2'>Quem somos?</h4>
            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta blanditiis commodi libero culpa totam voluptate earum. Repellat in culpa, expedita, commodi placeat doloremque, totam porro nemo possimus nostrum facere.</p>
            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta blanditiis commodi libero culpa totam voluptate earum. Repellat in culpa, expedita, commodi placeat doloremque, totam porro nemo possimus nostrum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora minima, consequatur at aut exercitationem debitis perspiciatis ad omnis optio, vitae nisi quia hic quaerat libero deleniti amet praesentium! Perspiciatis.</p>

            <h4 className='pt-5'>Nossa história</h4>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis suscipit beatae mollitia doloremque, temporibus fuga dolore quos distinctio molestiae minus exercitationem nihil, dolorum neque! Nam dignissimos facilis maiores molestiae nesciunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sequi corrupti unde aspernatur delectus ex pariatur assumenda quaerat maxime. Rerum error vel atque alias molestiae, corrupti repellat quasi dolorum minima!
            </p>

            <h4 className='pt-2'>Nossa cultura</h4>
            <h6 className='font-bvegan pt-2'>Propósito</h6>
            <p className="w-50">Nosso propósito é trazer a alegria na vida das pessoas com a nossa confeitaria em forma de docinhos pequenos e saborosos!</p>
            <h6 className='font-bvegan'>Missão</h6>
            <p className="w-50">A nossa missão é fazer com que a cada dia que passe, mais pessoas venham nos conhecer e possam desfrutar de nossos doces sem um peso tão grande na consciência!</p>
            <h6 className='font-bvegan'>Visão</h6>
            <p className="w-50">Transformar o ordinário em extraordinário, oferecendo ao nosso ecossistema uma relação duradoura com foco no crescimento, rentabilidade, oportunidades e sustentabilidade</p>
            <p className=''>Seja mais leve consigo mesmo em tudo que faça ou que vá fazer, viva a vida, aproveite os momentos, seja leve, seja <b style={{ color: '#d15e5e' }}>BVegan</b>!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bvegan