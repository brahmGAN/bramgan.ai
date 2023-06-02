import './team.css'

export default function team(){

    return(
        <div className='team'>
            <h1>Our Team</h1>
            <div className='colum'>
                <div className='row'>
                    <div className='subcolum' >
                        <img style={{borderRadius:'30px'}} src={'icons/Suraj.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Suraj Chawla</h4>
                        <h5 style={{margin:'0px'}}>CEO & Co-founder</h5>
                        
                    </div>
                    <div className='subcolum' >
                        <img  style={{borderRadius:'30px'}} src={'icons/Kiruba.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Kirubakaran Reddy</h4>
                        <h5 style={{margin:'0px'}}>CBO & Co-founder</h5>
                        
                      
                    </div>
                    <div className='subcolum' >
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