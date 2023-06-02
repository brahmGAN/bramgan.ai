import './technologies.css'
import IntroductionSection from '../introsection/introsection.component'
import FAQSection from '../FAQSection/FAQSection.component';
import Section2 from '../solutionsection2/solutionsection2.component'

export default function technologies()
{
    const data1={
        picture:'/icons/Ai(golden).svg',
        heading:'Technologies',
        description:'Our company is dedicated to using cutting-edge AI technologies like GAN and NeRF. Through these powerful tools, we are able to create incredibly realistic 3D models with stunning detail and accuracy. Our integration with machine learning and AI allows us to automate many aspects of the model creation process, making it faster and more efficient than ever before. By leveraging the power of AI, we can provide our clients with customized solutions that meet their exact needs, from gaming environments to eCommerce product showcases. At our core, we believe that AI technology is the future of digital creation, and we are excited to be at the forefront of this innovative field.'
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
      const data2={
        title:'',
        image:'icons/Nerf.svg',
        title1:'Gan',
        content1:'3D graphics and animations can create a more immersive gameplay experience by providing a realistic and detailed environment for the players to explore.',
        title2:'Nerf',
        content2:'We use NeRF to generate high-quality 3D models from 2D images and videos, allowing us to create realistic virtual environments.',
        title3:'Blockchain',
        content3:'Our use of blockchain technology enables us to decentralize the process of 3D model creation, allowing users from all over the world to contribute and earn GAN tockens for their contributions.'
    }
return(  
    <>
    <IntroductionSection data={data1}/>
    
    
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <h1 style={{marginLeft:'40px'}}>Cutting Edge Technologies at your <a href=' '>fingertips.</a></h1>
        <video src={'video/Voxel.webm'} autoPlay loop muted className='videocontainer' ></video>
    </div>
    <Section2 data={data2} />
    {/* <FAQSection data={faqData} /> */}

    </>
);
}