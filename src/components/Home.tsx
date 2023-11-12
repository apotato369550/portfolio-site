import './scss/Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Home() {
    return (
        <section className="home">
            <h1>Hi! I'm...</h1>
            <div className="name-container">
                <h1><u>J</u>ohn <u>A</u>ndre</h1> 
                <h1><u>Y</u>ap</h1>
            </div>
            <h2>Software Engineer</h2>
            <p>I'd love to get to know you more; and I'm so excited to show you what I'm made of. Feel free to have a look around as I show you what I have to offer!</p>
            
            <div className='user-interactables-container'>
                <div className="button-container">
                    <a href="/about-me">About Me</a>
                    <a href="/projects">Projects</a>
                </div>

                <div className="socials-icon-container">
                    <h2>My Socials</h2>
                    <ul>
                        <li><a href="https://github.com/apotato369550" target="_blank" ><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100077675029874" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a href="https://www.linkedin.com/in/john-andre-yap-6571a4200/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home