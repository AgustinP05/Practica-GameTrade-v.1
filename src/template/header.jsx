import { NavLink } from 'react-router-dom';



function Header(){
    return <header>
        <a href="#inicio">
            <img src="../img/header-logo-nobg.png"></img>
            <h1>GameTrade</h1>
        </a>
        
        <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/accesorios" >Accesorios</NavLink>
                <NavLink to="/adornos" >Adornos</NavLink>
                <NavLink to="/Juegos" >Videojuegos</NavLink>
        </nav>
    </header>
}

export default Header;