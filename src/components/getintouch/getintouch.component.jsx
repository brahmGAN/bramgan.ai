import './getintouch.css'

export default function getInTouch(){
    return(
    
      <div className='seclast'>
        <div><h1 className='intouch'>GET IN TOUCH</h1>
          <p style={{padding:"10px"}}>Office Locations in Bangalroe and Singapore</p>
          <a href=" " ><p style={{padding:"10px"}}>info@brahmgan.com</p></a>
          <button className='introbtn'style={{marginTop:"20px"}} >Contact Us</button>
          </div>
        <div>
        <img src={'/icons/handshake.svg'} alt={''}  />
        </div>
      </div>
          
    )
}