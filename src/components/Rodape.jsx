import React from 'react'
import './Rodape.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Rodape() {
    return (
        <div className="container-fluid rodape teste mt-5">
            <div className="container p-0">
                <div className="row">
                    <div className="col-sm-4 p-0">
                        <div className="mt-4">
                            <ul className='p-0'>
                                <p className='sobre-rodape'><b>Sobre</b></p>
                                <li className='li-items pt-2'>
                                    <Link className='links-rodape' to='/' >Início</Link>
                                </li>
                                <li className='li-items pt-2'>
                                    <Link className='links-rodape' to='/cardapio' >Cardápio</Link>
                                </li>
                                <li className='li-items pt-2'>
                                    <Link className='links-rodape' to='/bvegan' >A BVegan</Link>
                                </li>
                                <li className='li-items pt-2'>
                                    <Link className='links-rodape' to='/contato' >Contato</Link>
                                </li>

                                <h6 className='mt-4'>
                                    <span className='nome-rodape'>© A BVegan</span>
                                    <p className='paragraph-rodape pt-1'>CNPJ 00.000.000/0001-00</p>
                                </h6>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 p-0">
                        <div className="rodape-cont2 mt-4">
                            <p className='sobre-rodape'><b>Redes Sociais</b></p>
                            <ul className='p-0'>
                                <li className='li-items links-rodape pt-2'>
                                    <a href="">WhatsApp</a>
                                </li>
                                <li className='li-items links-rodape pt-2'>
                                    <a href="">Instagram</a>
                                </li>
                                <li className='li-items links-rodape pt-2'>
                                    <a href="">Facebook</a>
                                </li>
                                <li className='li-items links-rodape pt-2'>
                                    <a href="">Telefone</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 p-0">
                        <div className="rodape-cont3 mt-4">
                            <p className="sobre-rodape">
                                <b>Informações</b>
                            </p>
                            <ul className='p-0'>.
                                <li className="li-items links-rodape">
                                    Horário de funcionamento: <b>Segunda/Sábado 10:00 às 21:00</b>
                                </li>
                                <li className="li-items links-rodape pt-2">
                                    Localização: <b>R. Luíz Faccini, 132 - Centro, Guarulhos - SP, 07110-000</b>
                                </li>
                                <li className="li-items links-rodape pt-2">
                                    Em feriados podem ocorrer mudanças no horário, por favor, consultar no dia!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rodape