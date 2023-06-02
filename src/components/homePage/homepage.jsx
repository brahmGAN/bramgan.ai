import Clients from '../clients/clients.component'
import Slider from '../slider/slider.component'
import JoinMail from '../joinmail/joinMail.component'
import GetInTouch from '../getintouch/getintouch.component';
import MovingLeft from '../moving-left/moving-left.component';
import './homePage.css';


export default function HomePage() {

  const data1 = {
    title: 'Industries',
    para: 'Providing cutting-edge 3D infrastructure services for XR, gaming, and eCommerce industries.',
    image: '/icons/Hexa.svg',
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
  const data2 = {
    title: 'Technologies',
    para: 'We dont hold back with technologies when it comes to 3D. We use NeRF for video to 3D, GAN for Text to 3D, and Blockchain to democrotize 3D content creation from all over the world.',
    image: '/icons/whiteCloud.svg',
    image1: '/icons/Gan.svg',
    title1: 'Game',
    content1: 'Learn how brahmGAN is going to revolutionize gaming with NeRF and GAN Tech',
    image2: '/icons/Nerf.svg',
    title2: 'XR',
    content2: 'We help industries with tools such as 3D AR filters, 3D XR Viewers, XR related plugins to make 3D viewing easier.',
    image3: '/icons/BlockChain.svg',
    title3: 'eCommerce',
    content3: 'Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.'
  }

  return (
    <div className='effectsimg'>


      <section className="bgvideowrap">

        <video className="video" src={'video/Brahmgan.webm'} autoPlay loop muted></video>
        <div className="overlay">
          <div style={{ width: "500px" }}>

            <h1 className="h1intro">Introducing AI Generation</h1>
          </div>
          <p className='intropar'>Create amazing 3D content effortlessly with our text-to-3D tools.Our advanced technology uses NeRF, GAN, and Blockchain for fast, decentralized AI-based 3D content creation.With BrahmGAN, bring your ideas to life instantly, without technical expertise or complex software.Explore the future of 3D content creation and unlock your creativity.</p>

          <button className='introbtn'>Learn More</button>
        </div>
      </section>
      <MovingLeft data={data1} />

      {/*<section className="bgvideowrap">
        <img className="image" src={'/icons/Hexa.svg'} alt={' '}></img>
        <div className="overcontent">

          <div className="sectwohed">
            <h1 className='sectwoindu'>Industries</h1>
            <p className='sectwopar'>Providing cutting-edge 3D infrastructure services for XR, gaming, and eCommerce industries.</p>
          </div>
          <div style={{ display: "flex", marginLeft: "200px" }}>
            <div style={{ display: 'flex', }}>

              <div className='container moving-left'>
                <div class="overlays" >
                  <h4>Game</h4>
                  <p>Learn how brahmGAN is going to revolutionize gaming with NeRF and GAN Tech.</p>
                  <button className='learnm'>Learn More</button>
                </div>
              </div>
              <div className='containers moving-left'>
                <div class="overlays2">
                  <h4>XR</h4>
                  <p>We help industries with tools such as 3D AR filters, 3D XR Viewers, XR related plugins to make 3D viewing easier.</p>
                  <button className='learnm'>Learn More</button>
                </div>
              </div>
              <div className='containers3 moving-left'>
                <div class="overlays3">
                  <h4>eCommerce</h4>
                  <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
                  <button className='learnm'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>*/}

      <section className='sec3'>
        <h2>AI Generation is the Future, <a href=" ">Join us.</a></h2>
        <h1>Features</h1>
        <div>
          <img src={'/icons/speed.svg'} alt={''} />
          <p>Boost speed of assets creation using Tridev our Asset Creation app.</p>
        </div>
        <div>
          <img src={'/icons/Users.svg'} alt={''} />
          <p>With global cult like followers, get 3D model of any object you want in instant, through the power of blockchain.</p>
        </div>
        <div>
          <img src={'/icons/Gameready.svg'} alt={''} height={200} width={300} />
          <p>Generated assets are Game Ready assets with instant import and delighting for use with in game lights.</p>
        </div>
        <div>
          <img src={'/icons/Ai.svg'} alt={''} />
          <p>AI Generated assets from prompts, just type what object you want, and have 3D model of that ready.</p>
        </div>
      </section>

      <MovingLeft data={data2} />

      {/* sectionn 4 */}
      {/*<section className="bgvideowrap">
         <video className="video" src={'video/background.webm'} autoPlay loop muted></video>
        <img className="image" src={'https://static.wixstatic.com/media/6379c4_0c3652a7127846aa9f4b0686852f3759~mv2.jpg/v1/fill/w_1222,h_1025,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6379c4_0c3652a7127846aa9f4b0686852f3759~mv2.jpg'} alt={' '}></img>
        <div className="overcontent">

          <div className="sectwohed4">
            <h1 className='sectwoindu4'>Technologies</h1>
            <p className='sectwopar4'>We don't hold back with technologies when it comes to 3D. We use NeRF for video to 3D, GAN for Text to 3D, and Blockchain to democrotize 3D content creation from all over the world.</p>
          </div>

          <div style={{ display: "flex", marginLeft: "200px" }}>

            <div className='containertech1 moving-left'>

              <div class="overlaystech1">
                <p>Learn how brahmGAN is going to revolutionize gaming with NeRF and GAN Tech.</p>
                <button className='learnm'>Learn More</button>
              </div>
            </div>
            <div className='containertech2 moving-left'>
              <div class="overlaystech2">
                <p>We help industries with tools such as 3D AR filters, 3D XR Viewers, XR related plugins to make 3D viewing easier.</p>
                <button className='learnm'>Learn More</button>
              </div>
            </div>
            <div className='containertech3 moving-left'>
              <div class="overlaystech3">
                <p>Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.</p>
                <button className='learnm'>Learn More</button>
              </div>
            </div>

          </div>

          <div className='sec4btn'>

            <button className='introbtn'>Learn More</button>
          </div>
        </div>
</section>*/}

      <Clients />

      < Slider />
      <section className='sec5'>
        <h1>"</h1>
        <div>
          <p>Using brahmGAN's NeRF solutions for our VR Services, we were able to quickly create stunning worlds in matter days. Defenetily going to incoporate thier entire stack in our workflow in future.</p>
          <h5>Manju M, Project Manager</h5>
          <h5>Taanga Studios</h5>
        </div>
        <div>
          <p>"Never thought AI could be usesful in our site. Been a game changer since we integrated 3D Assets for site.”</p>
          <h5>Claire Brooks, MI</h5>
        </div>
        <div>
          <p>"Never thought AI could be usesful in our site. Been a game changer since we integrated 3D Assets for site.”</p>
          <h5>Claire Brooks, MI</h5>
        </div>
      </section>

      <GetInTouch />

      <JoinMail />


    </div>
  );
}