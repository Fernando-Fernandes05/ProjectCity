import React from 'react';
import './Navbar.css';
import Image from 'next/image';
import brasao from '../assets/campos.svg';
import pin from '../assets/pin.svg';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
            <Image className="w-28" src={brasao} alt="Campos" />
            <div><Link href="">INÍCIO</Link></div>
            <div><Link href="/dashboard">CADASTRAR</Link></div>
        </div>
        <div className="navbar-right">
            <Link href=""><Image src={pin} alt="Campos" /></Link>
        </div>
      </div>
    </header>
  );
}
