import './clentcomponent.css'
import {useState} from 'react'

export default function ClientComponent(){
    const [hovered, setHovered] = useState(true);
    const [hovered1, setHovered1] = useState(true);
    const [hovered2, setHovered2] = useState(true);
    const [hovered3, setHovered3] = useState(true);
    const [hovered4, setHovered4] = useState(true);

    return(
        <div className='clientcontainer' >
            <div className='clientheader'>
                <h3>Trusted Among Industry Leaders</h3>
                <p>We have worked with several industry leaders to realise thier 3D requirements using our cutting edge AI tools.</p>
            </div>
            <div className='clienticons'>
                <div className='clientimage' onMouseEnter={()=>setHovered(false)} onMouseLeave={()=>setHovered(true)} >
                    <img src={hovered ? '/icons/Amilma.svg' : '/icons/Amilmacolored.png'}  alt={''} height={100} width={200} />
                    
                </div>
                <div className='clientimage' onMouseEnter={()=>setHovered1(false)} onMouseLeave={()=>setHovered1(true)} >
                <img src={hovered1 ? '/icons/Alphablockz.svg' : '/icons/Alphablockzcolored.png'}  alt={''} height={60} width={200} />
                </div>
                <div className='clientimage' onMouseEnter={()=>setHovered2(false)} onMouseLeave={()=>setHovered2(true)} >
                <img src={hovered2 ? '/icons/Taanga.svg' : '/icons/Taangacolored.png'}  alt={''} height={60} width={200} />
                </div>
                <div className='clientimage' onMouseEnter={()=>setHovered3(false)} onMouseLeave={()=>setHovered3(true)} >
                <img src={hovered3 ? '/icons/Frouter.svg' : '/icons/Froutercolored.png'}  alt={''} height={60} width={200} />
                   
                </div>
                <div className='clientimage' onMouseEnter={()=>setHovered4(false)} onMouseLeave={()=>setHovered4    (true)} >
                <img src={hovered4 ? '/icons/frontier.svg' : '/icons/frontiercolored.png'}  alt={''} height={40} width={200} /> 
                </div> 
            </div> 
        </div>
    )
}