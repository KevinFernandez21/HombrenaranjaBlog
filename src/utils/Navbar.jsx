import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavbarPages from './Navbar/NavbarPages';
import HamburguerMenu from './Navbar/HamburguerMenu';
export default function Navbar() {
    const[isMenu,setMenu] = useState(false);
    const[isClick,setClick] = useState(false);
    const handleMenu = () => {
        setMenu(!isMenu);
    }
    const leaveMenu = () => {
        setMenu(false);
    }
    return (
        <div>
            <nav className="xl:flex 
                            justify-between
                            content-center 
                            items-center
                            bg-orange-600 
                            w-full">
                <div className='px-6 py-4 flex justify-between content-center items-center'>
                    <Link to='/' onClick={leaveMenu}>
                        <img className='w-[150px]' src="/src/assets/Logo/LogoHombrenaranjaWhiteTrazo.png" alt="logo"/>
                    </Link>
                    <div onClick={handleMenu}>
                        <HamburguerMenu/>
                    </div>
                </div>
                <ul className={`xl:flex py-7 xl:bg-transparent bg-orange-400 absolute xl:static xl:w-auto w-full ${isMenu?"":"hidden"}`}> 
                    <Link to='/' onClick={leaveMenu}><NavbarPages title ="Inicio" /></Link>
                    <Link to='/About' onClick={leaveMenu}><NavbarPages title ="Quien Soy"/></Link>
                    <Link to='/Projects' onClick={leaveMenu}><NavbarPages title ="Proyectos"/></Link>
                    <Link to='/Documentation' onClick={leaveMenu}><NavbarPages title ="Documentaciones"/></Link>
                    <Link to='/Contacts' onClick={leaveMenu}><NavbarPages title ="Contacto"/></Link>
                </ul>
            </nav>
        </div>
    )
}
