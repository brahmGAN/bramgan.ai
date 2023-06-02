import './introsection.css'

export default function introSection({ data })
{
    return(
    <div className='section1'> 
    <img className='introimage' src={ data.picture } alt={''} />
    <h1 className='heading'>{ data.heading }</h1>
     <p className='p'>{ data.description }</p>
    </div>
    )
}