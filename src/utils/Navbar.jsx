import NavbarPages from './Navbar/NavbarPages';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="flex 
                            justify-between
                            content-center 
                            items-center
                            bg-orange-600 
                            w-full">
                <div className='px-6 py-4'>
                    <Link to='/'>
                        <img className='w-[150px]' src="/src/assets/Logo/LogoHombrenaranjaWhiteTrazo.png" alt="logo"/>
                    </Link>
                </div>
                <ul className="xl:flex py-7"> 
                    <Link to='/'><NavbarPages title ="Inicio"/></Link>
                    <Link to='/About'><NavbarPages title ="Quien Soy"/></Link>
                    <Link to='/Projects'><NavbarPages title ="Proyectos"/></Link>
                    <Link to='/Documentation'><NavbarPages title ="Documentaciones"/></Link>
                    <Link to='/Contacts'><NavbarPages title ="Contacto"/></Link>
                </ul>
                <label className='text-white justify-center px-6'>
                    <input type="checkbox" />
                </label>
            </nav>
        </div>
    )
}
