import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header className="bg-black flex text-blue-300 text-2xl h-24 justify-around items-center">
                
                <nav>
                    <ul className="flex gap-6">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}