import './about.css'
import {Link} from 'react-router-dom'

export default function about(){

    return(
        <div className='aboutpage'>
        <div className='aboutheader'>
         <h1>Our Bussiness</h1>
         <h4>Changing the Game, literally</h4>
         <p>We are focused on creating the next generation of infrastructure for 3D services.
            The company was started in 2022 by serial entrepreneurs to help various gaming studios make their asset development faster. Soon we grew to cater Ecommerce clients as well who were keen to take their 2D customer experience to 3D with more engagement and conversion.
            Today we also serve the XR industry which innovatively uses the NeRF outputs to create highly photorealistic scenes.
        </p>

        </div>
        <div className='colum'>
            <h1>OUR TEAM</h1>
            <h4>Who We Are</h4>
            <div className='row' >
            <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Suraj.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Suraj Chawla</h4>
                        <h5 style={{margin:'0px'}}>CEO & Co-founder</h5>
                        
                    </div>
                    <div className='subcolum'>
                        <img  style={{borderRadius:'30px'}} src={'icons/Kiruba.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Kirubakaran Reddy</h4>
                        <h5 style={{margin:'0px'}}>CBO & Co-founder</h5>
                        
                      
                    </div>
                    <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Puru.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Puru</h4>
                        <h5 style={{margin:'0px'}}>CTO & Co-founder</h5>
                        
                      
                    </div>
                    </div>
                    <div className='row'>
                    <div className='subcolum' >
                        <img style={{borderRadius:'30px'}} src={'icons/Yogesh.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Yogesh Achari</h4>
                        <h5 style={{margin:'0px'}}>Senior Marketing Lead</h5>
                        
                      
                    </div>
                    <div className='subcolum' >
                        <img style={{borderRadius:'30px'}} src={'icons/Kamala.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Kamala</h4>
                        <h5 style={{margin:'0px'}}>Content Strategist Specialist</h5>
                        
                      
                    </div>
                    <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Patanjali.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Pathanjali Sharma</h4>
                        <h5 style={{margin:'0px'}}>Business Development</h5>
                        
                      
                    </div>
                </div>
                <div className='row'>
                    <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Praful.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Praful R</h4>
                        <h5 style={{margin:'0px'}}>Tech Advisor</h5>
                        
                      
                    </div>
                </div>
 
        </div>
        </div>
    );
}