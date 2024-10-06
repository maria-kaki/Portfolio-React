import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header className="bg-black flex text-blue-300 text-2xl h-24 justify-around items-center">
                
                <nav>
                    <ul className="flex gap-6">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/personal-presentation">Sobre Mim</NavLink></li>
                        <li><NavLink to="/projects">Projetos</NavLink></li>
                        <li><NavLink to="/contact">Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}