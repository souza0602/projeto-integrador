import React from 'react'
import './Topo.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import logoTopo from '../assets/logoTopo.png'





function Topo() {
    return (
        <>
            <div className="container text-center p-0">
                <img className='pt-3' src={logoTopo} alt="" />
                <div className="row">
                    <div className="col-sm p-0 navbar-css">
                        <Link to='/'><span className='link-style'>INÍCIO</span></Link>
                        <Link to='/cardapio'><span className='link-style'>CARDÁPIO</span></Link>
                        <Link to='/bvegan'><span className='link-style'>A BVEGAN</span></Link>
                        <Link to='/contato'><span className='link-style'>CONTATO</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topo