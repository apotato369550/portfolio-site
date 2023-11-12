import './scss/MyProjects.scss'
import githubLogo from '../assets/githubLogo.svg'
function MyProjects() {
    return (
        <section className="my-projects">
            <div className="github">
            <h1>Check out my projects on Github! </h1>
                <a href="https://github.com/apotato369550" target="_blank">            
                    <img src={githubLogo} alt="github logo" className="github-logo" />
                </a>
                <p>Github: @apotato369550</p>
                <a href="https://github.com/apotato369550/new-portfolio-site" target="_blank">
                This site's source code (and other previous versions) </a>
            </div>
            <br />
            <h2>Cool stuff I built: </h2>
            <div className="other-projects">
                <a href="https://github.com/apotato369550/bartr-ecommerce" target="_blank">Bartr - E-commerce Site (HTML5, PHP, SQL, JQuery)</a>
                <a href="https://github.com/apotato369550/python-chatroom-application" target="_blank">Desktop Chatroom app (Python)</a>
                <a href="https://github.com/apotato369550/super-simple-sortr" target="_blank">Sorting Algorithm Visualizer (Python)</a>
                <a href="https://github.com/apotato369550/python-excel-spreadsheet-prototype" target="_blank">Receipt Builder (all versions. Python)</a>
                <a href="https://github.com/apotato369550/minecraft-zombie-apocalypse-plugin-spigot" target="_blank">Minecraft Plugin - Zombie Apocalypse (Java)</a>
            </div>
        </section>
    )
}

export default MyProjects