import './feature.css' 

export default function Features(){
    return(
        <div className='feature'>
            
            <div className='imageheader'>
            
            <div className='headers'>
                <h2 style={{fontSize:'36px'}}>Our Features</h2>     
                <p style={{fontSize:'20px',fontWeight:'300px'}}></p>
            </div>
            {/* <img className='imagecontainerheader' src={'icons/bg.png'} alt={''} /> */}
            </div>
            <div className='featurecontainer'>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Speed.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>BG Architect</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>A Video to 3D pipeline, which takes a video of an object and convert it into an usable 3D model.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Users.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>BG Genie (Coming Soon)</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>An Image to 3D pipeline, which takes an image of an object and convert it into an usable 3D model.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Gameready.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>BG Avatar (Coming Soon)</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>A Text to 3D pipeline, which takes text prompt as an input and convert it into an usabke 3D Model.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Ai.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>GPU Network</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>A decentralized GPU network, A person can be an user or a provider by renting the GPU on GPU network.</p>
                </div>
            </div>
        </div>
    )
}