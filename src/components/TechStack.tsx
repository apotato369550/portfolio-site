import './scss/TechStack.scss'
import html5Logo from '../assets/html5-logo.png'
import reactLogo from '../assets/react-logo.png'
import sassLogo from '../assets/sass-logo.png'

function TechStack() {

    return (
        <section className="tech-stack">
            <p>This site was built using </p>
            <img src={html5Logo} alt="HTML5 logo" className="html5-logo" />
            <div className="logo-row">
                <img src={reactLogo} alt="React logo" className="react-logo" />
                <img src={sassLogo} alt="SASS logo" className="sass-logo" />
            </div>
        </section>
    )
}

export default TechStack