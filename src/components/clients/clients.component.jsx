import './client.css'

export default function clients(){
    return(
        <div className='clientsec'>
            <div  className="sectwohed4">
                <h1 className='sectwoindu4'>Our Clients</h1>
            </div>
          
            <div  className='clientdiv'>
                <div>
                    <img src={'/icons/Amilma.svg'} alt={''} height={200} width={200} />
                </div>
                <div>
                    <img src={'/icons/Alphablockz.svg'} alt={''} height={200} width={200} />
                </div>
                <div>
                    <img src={'/icons/Taanga.svg'} alt={''} height={200} width={200} />
                </div>
                <div>
                    <img src={'/icons/Frouter.svg'} alt={''} height={200} width={200} />
                </div>
                <div>
                    <img src={'/icons/frontier.svg'} alt={''} height={200} width={200} />
                </div>  
          </div>
        </div>
    )
}