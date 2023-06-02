import './contactSection.css'

export default function ContactSection(){

    return(

        <div className='contactContainer'>
            <div className='contactheader'>
                <img src={'/icons/brahmGAN.png'} height={100} width={100}  alt={''} />
            </div>
            <div className='contactsubsection'>
                <div className='contactInformation'>
                    <h4>Contact</h4>
                    <div className='contacts'>
                        <div className='contactDetails'>
                            <p>3 FRASER STREET #05-25, DUO TOWER, 189352, Singapore</p>
                        </div>
                        <div className='contactDetails'>
                                <p>Sales:
                                karan@brahmgan.com</p>
                        </div>
                    </div>
                    {/* <div className='contacts'>
                        <div className='contactDetails'>
                             <p>General Inquiries:
                            123-456-7890</p>
                        </div>
                        <div className='contactDetails'>
                            <p>Customer Care:
                            info@brahmgan.com</p>
                        </div>
                    </div> */}
                </div>
                <div>

            </div>
            {/* <div className='socialLinks'>
                    <h4>Quick Links</h4>
                    <a href=' ' ><p>Terms&Condition</p></a>
                    <a href=' ' ><p>Privacy policies</p></a>
                </div> */}
                {/* <div className='socialLinks'>
                    <h4>Follow</h4>
                    <p>Sign up to get the latest news on our product.</p>
                    <input type="email" style={{backgroundColor:'#FFBF23', border:'1px solid black'}} ></input>
                    <button style={{backgroundColor:'black', color:'white'}}>Send</button>
                </div> */}           
            </div>
        </div>
    )
}