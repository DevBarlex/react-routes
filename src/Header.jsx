import { Link, Outlet } from 'react-router-dom'

function Header() {
    return (
        <>  
            <nav>
                <Link to="/">Inicio</Link> | 
                <Link to="/projects">Proyectos</Link> | 
                <Link to="/resume">Currículum</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Header