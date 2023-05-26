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
            <div><Link href="/inicio">INÍCIO</Link></div>
            <div><Link href="/">PESQUISA</Link></div>
        </div>
        <div className="navbar-right">
            <a href="
            https://www.google.com/maps/d/viewer?mid=1yEq2fyoWf8DZZvm1xcfEOlVU-YE&hl=en_US&ll=-22.739743773193226%2C-45.56710500000001&z=13
            "><Image src={pin} alt="Campos" /></a>
        </div>
      </div>
    </header>
  );
}
