import './scss/Header.scss'
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom'

function Header() {
    const history: NavigateFunction = useNavigate();

    const handleNavigationLinkClick = (url: string) => {
        // play animation here
        console.log(url); 
        setTimeout(() => {
            history(url);
        }, 500); // 500 milliseconds (adjust as needed)
    }

    

    return (
        <header>
            <nav className="nav">
                <input type="checkbox" id="nav-checkbox" className="nav-checkbox" style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} />
                <label htmlFor="nav-checkbox" className="nav-toggle">
                    <img src={hamburger} width="100" height="100" className="hamburger" title="hamburger" />
                    <img src={close} width="100" height="100" className="close" title="close" />
                </label>
                <ul className="nav-menu">
                    <Link to="/portfolio-site" className="logo" onClick={(e) => { e.preventDefault(); handleNavigationLinkClick("/portfolio-site") }}>
                        JAY
                    </Link>
                    <li>
                        <Link to="/portfolio-site" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigationLinkClick("/portfolio-site") }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about-me" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigationLinkClick("/about-me") }}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigationLinkClick("/projects") }}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact-me" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigationLinkClick("/contact-me") }}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header