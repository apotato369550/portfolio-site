import './scss/Blob.scss'
import { useEffect } from 'react'
import kute from 'kute.js'

function Blob() {
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
        <section className="blob">
            <p>Check out this cool blob.</p>
            <div className="blob-container">
                <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">

                    <g transform="translate(447.3119474449794 296.94448707974)">
                        <path id="blob-1"
                            d="M103.9 -196.9C129.4 -165.2 141.4 -126.8 161.3 -92.9C181.2 -59 209.1 -29.5 218.3 5.3C227.6 40.2 218.1 80.3 203.6 123.6C189.1 166.9 169.6 213.4 134.8 236.3C100 259.2 50 258.6 11.8 238.1C-26.3 217.6 -52.7 177.2 -95.5 159C-138.4 140.7 -197.8 144.6 -212.6 121.8C-227.5 99 -197.7 49.5 -176.5 12.2C-155.3 -25 -142.6 -50 -129.6 -76C-116.6 -102 -103.3 -128.9 -81.7 -162.9C-60 -196.9 -30 -238 4.6 -245.9C39.2 -253.8 78.3 -228.7 103.9 -196.9"
                            fill="#BB004B"></path>
                    </g>
                    <g transform="translate(410.8679636715371 286.50081095782514)" style={{ visibility: 'hidden' }}>
                        <path id="blob-2"
                            d="M75.3 -144.5C100.5 -115.8 126 -101.6 163.2 -80C200.4 -58.3 249.2 -29.2 257.7 4.9C266.2 39 234.4 78 200.8 105.9C167.3 133.7 131.9 150.4 98.1 180.9C64.3 211.4 32.2 255.7 -0.9 257.3C-34 258.9 -68 217.8 -93.8 182.7C-119.7 147.6 -137.3 118.6 -147.7 89.1C-158 59.7 -161 29.8 -168.1 -4.1C-175.2 -38 -186.3 -76 -177.7 -108.5C-169.1 -141 -140.8 -167.9 -107.9 -192.2C-75 -216.6 -37.5 -238.3 -6.2 -227.5C25 -216.6 50 -173.3 75.3 -144.5"
                            fill="#BB004B"></path>
                    </g>

                    <g transform="translate(384.24568477050343 308.9410636939398)">
                        <path id="blob-3"
                            d="M60.5 -126.3C83 -91.8 109.1 -84.9 149.2 -68.5C189.4 -52 243.7 -26 264.5 12C285.3 50 272.5 100 247.6 142.9C222.7 185.7 185.6 221.5 142.3 219.8C99 218.1 49.5 179.1 12.8 156.8C-23.8 134.6 -47.7 129.2 -77.4 123.1C-107.1 116.9 -142.8 109.9 -143.4 89.3C-143.9 68.7 -109.5 34.3 -103.3 3.6C-97.1 -27.2 -119.1 -54.3 -123.3 -83.2C-127.4 -112.1 -113.7 -142.6 -90.2 -176.6C-66.7 -210.5 -33.3 -247.7 -7.2 -235.3C19 -222.9 38 -160.8 60.5 -126.3"
                            fill="#1ecbe1"></path>
                    </g>
                    <g transform="translate(452.87613986136546 359.4953812370786)" style={{ visibility: 'hidden' }}>
                        <path id="blob-4"
                            d="M124.2 -228C148.5 -201.2 147 -142.6 139.2 -99.3C131.3 -56 117.2 -28 135.1 10.3C153 48.7 202.9 97.3 196.8 116.4C190.6 135.4 128.3 124.9 86.1 113C44 101.2 22 88.1 1.8 85.1C-18.5 82 -37 89.1 -63.7 92C-90.4 94.9 -125.3 93.7 -146.2 77.7C-167.1 61.7 -174.1 30.8 -185.8 -6.7C-197.5 -44.3 -213.9 -88.7 -193.1 -104.8C-172.2 -121 -114.1 -109 -75.7 -127.7C-37.3 -146.3 -18.7 -195.7 15.7 -222.8C50 -249.9 100 -254.9 124.2 -228"
                            fill="#1ecbe1"></path>
                    </g>
                </svg>
            </div>


        </section>
    )
}

export default Blob