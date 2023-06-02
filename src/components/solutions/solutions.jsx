import './solution.css'
import IntroSection from '../introsection/introsection.component';
import FAQSection from '../FAQSection/FAQSection.component';

export default function solutions()
{
    const data={
        picture:'/icons/solution.webp',
        heading:'Solutions',
        description:'Our companys unique selling point is our ability to leverage the latest technologies such as NeRF, GAN, and blockchain to provide innovative and decentralized solutions for the XR, gaming, and eCommerce industries. Our NeRF app allows users worldwide to capture 3D models quickly and easily, while our blockchain-based incentive system rewards users with crypto coins for creating and sharing 3D models. This enables clients to request any kind of 3D assets created by users across the globe. Our GAN technology provides photorealistic 3D models, and our custom solutions can be integrated seamlessly into existing workflows and software. We aim to deliver cutting-edge, cost-effective solutions to our clients.'    
    }
    
    const faqData = [
        {
          question: "Can you integrate your 3D infrastructure solutions with our existing software and platforms?",
          answer:
            "Yes, we can work with your team to integrate our solutions with your existing software and platforms, such as Unity or Unreal game engines, eCommerce websites, or other systems.",
        },
        {
          question: "How do you integrate NeRF, blockchain, and GAN technologies into your solutions for XR, gaming, and eCommerce industries?",
          answer:
            "Yes, we can work with your team to integrate our solutions with your existing software and platforms, such as Unity or Unreal game engines, eCommerce websites, or other systems.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sapien ipsum. Quisque ac diam blandit, fringilla nulla a, fringilla lorem. Nam auctor massa eget neque bibendum feugiat.",
        },
      ];


return(  
    <>
    <IntroSection data={data} />
    
    <div className='section2'>
    <h2>Custom Solutions based on industries</h2>
    <div className='subsection2'>
    <div className='subsectioncontainer'>
        <img style={{borderRadius:'30px', height:'270px', width:'330px'}} src={'icons/Cat House.webp'} alt={''} />
        <h2 style={{margin:'0px'}}>Gaming</h2>
        <p style={{margin:'10px'}}>We provide gaming studios with tech stack to create 3D models easily.</p>
        {/* <button className='button2'>Know more</button> */}
    </div>
    <div className='subsectioncontainer'>
        <img style={{borderRadius:'30px', height:'270px', width:'330px'}} src={'icons/Auto Virtual Reality.webp'} alt={''} />
        <h2 style={{margin:'0px'}}>XR</h2>
        <p style={{margin:'10px'}}>Easily integrate 3D models into AR and VR apps to showcase your clients using our custom solutions for XR</p>
        {/* <button className='button2'>Know more</button> */}
    </div>
    <div className='subsectioncontainer'>
        <img style={{borderRadius:'30px', height:'270px', width:'330px'}} src={'icons/Yellow Couch.webp'} alt={''} />
        <h2 style={{margin:'0px'}}>eCommerce</h2>
        <p style={{margin:'10px'}}>We can provide infra to showcase 3D models in your site and easily integrate with exisitng tech.</p>
        {/* <button className='button2'>Know more</button> */}
    </div>
    </div>
    </div>
    
       
        {/* <FAQSection data={faqData} /> */}
        
   
    </>
);
}