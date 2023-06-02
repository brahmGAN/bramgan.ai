import './herosection.css'

export default function heroSection(){
    return(

        <section className="bgvideowrap">

            <video className="video" src={'video/Brahmgan.webm'} autoPlay loop muted></video>
            <div className="overlay">
                <div style={{ width: "500px" }}>

                    <h1 className="h1intro">3D Generative AI</h1>
                </div>
                <p className='intropar'>To make asset generation 5x faster, 5x cheaper and 4x photorealistic. <br></br><br></br>
                With our Video to 3D product you can just take a video of any object (your car or your table action figure) and bring it to the Metaverse!
                </p>

                <button className='introbtn'><a href='https://app.brahmgan.com' target="_blank">Try Now</a></button>
            </div>
        </section>
    
    )
}