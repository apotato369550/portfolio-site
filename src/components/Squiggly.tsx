import './scss/Squiggly.scss'
import { useEffect } from 'react'
import kute from 'kute.js'

function Squiggly() {
    useEffect(() => {

        const tween = kute.fromTo(
            '#blob-1',
            { path: '#blob-1' },
            { path: '#blob-2' },
            { repeat: 999, duration: 3000, yoyo: true }
        )
        tween.start()

        const tween2 = kute.fromTo(
            '#blob-3',
            { path: '#blob-3' },
            { path: '#blob-4' },
            { repeat: 999, duration: 3000, yoyo: true }
        )
        tween2.start()

    }, [])
    return (
        <section className="squiggly">
            <p>Check out this cool squiggly.</p>
            <div className="squiggly-container">
                <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">

                    <g transform="translate(367.50883831084775 275.93563746986365)">
                        <path
                            d="M118.8 -87.8C168.8 -68.8 234.4 -34.4 251.9 17.4C269.3 69.3 238.6 138.6 188.6 158.1C138.6 177.6 69.3 147.3 30.2 117.1C-8.8 86.8 -17.7 56.7 -25.8 37.2C-34 17.7 -41.5 8.8 -57.6 -16.1C-73.7 -41 -98.4 -82 -90.2 -101C-82 -120 -41 -117 -3.3 -113.7C34.4 -110.4 68.8 -106.8 118.8 -87.8"
                            fill="none" stroke="#c7d716" strokeWidth="15" id="blob-1"></path>
                    </g>

                    <g transform="translate(465.75860112357975 297.4277211678593)" style={{ visibility: 'hidden' }}>
                        <path
                            d="M117.1 -207.2C149.9 -183.9 173.2 -148.7 183.8 -112.2C194.4 -75.7 192.2 -37.8 183 -5.3C173.7 27.2 157.4 54.3 136.4 72.7C115.3 91 89.4 100.5 65.9 136.9C42.3 173.3 21.2 236.7 -0.2 237.1C-21.7 237.5 -43.3 175.1 -80.1 146.3C-116.9 117.6 -168.9 122.5 -196.6 103.8C-224.2 85 -227.6 42.5 -216.4 6.5C-205.1 -29.5 -179.2 -59 -150.1 -75.2C-120.9 -91.5 -88.6 -94.5 -63.1 -121.9C-37.5 -149.3 -18.8 -201.1 11.7 -221.4C42.2 -241.7 84.3 -230.4 117.1 -207.2"
                            fill="none" stroke="#c7d716" strokeWidth="15" id="blob-2"></path>
                    </g>

                    <g transform="translate(499.5209125369334 262.08747576977777)">
                        <path
                            d="M108.6 -187.6C135.9 -172.4 149.8 -133.4 156.8 -98.2C163.8 -63 163.9 -31.5 152.9 -6.4C141.8 18.8 119.6 37.5 116.5 79.4C113.3 121.2 129.1 186.2 112.9 226.8C96.7 267.4 48.3 283.7 11.7 263.5C-25 243.3 -50 186.6 -87.7 158.4C-125.3 130.1 -175.7 130.3 -210.9 108.7C-246 87 -266 43.5 -259.5 3.8C-253 -36 -220 -72 -190 -102.6C-160 -133.2 -133 -158.4 -101.8 -171.4C-70.7 -184.4 -35.3 -185.2 2.7 -189.8C40.7 -194.4 81.3 -202.9 108.6 -187.6"
                            fill="none" stroke="#16d760" strokeWidth="15" id="blob-3"></path>
                    </g>

                    <g transform="translate(462.19826092548294 259.11049835067024)" style={{ visibility: 'hidden' }}>
                        <path
                            d="M120 -121.8C140.5 -99.5 131.7 -49.7 131.9 0.1C132 50 140.9 99.9 120.4 149.9C99.9 199.9 50 250 2.8 247.1C-44.3 244.3 -88.6 188.6 -107.4 138.6C-126.1 88.6 -119.3 44.3 -130.5 -11.2C-141.7 -66.7 -170.9 -133.4 -152.2 -155.7C-133.4 -178.1 -66.7 -156 -8.5 -147.6C49.7 -139.1 99.5 -144.1 120 -121.8"
                            fill="none" stroke="#16d760" strokeWidth="15" id="blob-4"></path>
                    </g>
                </svg>
                
            </div>
            
        </section>
    )
}

export default Squiggly