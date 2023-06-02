import React,{useState} from 'react'
import './tech.css'

export default function Tech(){
    const [imagebox, setImagebox]=useState('icons/gan.svg');


    return(
        <div className='techContainer'>
            {/* <div className='ButtonContainer'>
                <h3 style={{fontSize:'26px',fontWeight:'200px'}}>With cutting edge
                      technologies from around the world creating the future of 3D design and gaming!</h3>
                <button className='buttons' onClick={()=>setImagebox('icons/Gan.svg')}>
                    <img  style={{height:'80px',width:'80px', marginRight:'20px'}} src={'icons/gan.png'} alt={' '} />   GAN</button>
                <button className='buttons' onClick={()=>setImagebox('icons/Nerf.svg')}>
                    <img  style={{height:'80px',width:'80px',marginRight:'20px'}} src={'icons/Nerf.png'} alt={' '} />    Nerf</button>
                <button className='buttons' onClick={()=>setImagebox('icons/Blockchain.svg')}>
                <img  style={{height:'80px',width:'80px', marginRight:'20px'}} src={'icons/blockchain.png'} alt={' '} />    Blockchain</button>
            </div>
            <div className='detailimagecontainer'>
                <img style={{objectFit:'cover'}} src={imagebox} alt={''} />
            </div> */}
        </div>
    )
}