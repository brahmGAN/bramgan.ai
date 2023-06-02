import HeroSection from '../HeroSection/hersosection.component'
import HomeSection1 from '../homesection1/homesection1.component'
import Features from '../features/feature.component'
import CreativeSection from '../creativeSection/creativeSection.component'
import ClientComponent from '../clientcomponent/clientcomponent.component'
import Review from '../review/review.component'
import MovingLeft from '../moving-left/moving-left.component'
import Tech from '../tech/tech.component'

export default function Home(){
    
    const data1 = {
        title: 'Industries',
        para: 'Providing cutting-edge 3D infrastructure services for XR, gaming, and eCommerce industries.',
        image1: '/icons/GamePad.svg',
        title1: 'Game',
        content1: 'Learn how brahmGAN is going to revolutionize gaming with NeRF and GAN Tech',
        image2: '/icons/VR.svg',
        title2: 'XR',
        content2: 'We help industries with tools such as 3D AR filters, 3D XR Viewers, XR related plugins to make 3D viewing easier.',
        image3: '/icons/Cart.svg',
        title3: 'eCommerce',
        content3: 'Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.'
      }
      
    return(
        <>
        <HeroSection />
        <HomeSection1 />
        <MovingLeft data={data1}/>
        <Features />
        <CreativeSection />
        <Tech />
        <ClientComponent />
        <Review />
        <div style={{width:'100%',display:'flex', justifyContent:'center' ,alignItems:'center'}} >
        <img style={{width:'50%'}} src={'icons/BrahmGAN.jpg'} alt={''} />
        </div>
        </>
    )
}