import './scss/ColorWheel.scss'
import colorWheel from '../assets/colorWheel.png'

function ColorWheel() {

    return (
        <section className="color-wheel">
            <div className="image-background">
                <img src={colorWheel} alt="picture of me" className="photo-of-wheel" />
            </div>
        </section>
    )
}

export default ColorWheel