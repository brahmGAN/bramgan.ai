import Section1 from '../solutionsection1/solutionsection1.component'
import Section2 from '../solutionsection2/solutionsection2.component'
import Section3 from '../solutionsection3/solutionsection3.component'
import Content from '../solutionsection3content/solutionsection3content.component'
import Content2 from '../solutionsection3content2/solutionsection3content2.component'

export default function game()
{
    const data1={
        title:'3D for Gaming',
        image:'icons/GamePad.svg',
        description:'At our company, we specialize in providing cutting-edge solutions for the gaming industry, using technologies such as NeRF and GAN to create highly optimized 3D models ready to be used in Games. We offer a range of services, from 3D modeling and integration with popular game engines Unity and Unreal. Whether you are looking to create a new game from scratch or to enhance an existing game with 3D elements, we have the expertise and technology to help you achieve your goals.',
        iframe:'https://taanga-studios-website.web.app/?product=treehouse'
    }

    const data2={
        title:'3D In Gaming',
        image:'icons/Nerf.svg',
        title1:'Immersive',
        content1:'3D graphics and animations can create a more immersive gameplay experience by providing a realistic and detailed environment for the players to explore.',
        title2:'Enhanced Visuals',
        content2:'3D graphics can enhance the visual appeal of a game by providing more realistic textures, lighting, and shading effects. This can attract more players and increase the overall quality of the gaming experience.',
        title3:'Flexibility',
        content3:'3D graphics and animations allow for more flexibility in game design and development. They can be easily modified and customized to fit the specific needs and preferences of the game developers and players.'
    }
    const data3={
        title:'Object Showcase ',
        subtitle:'Here are various products that can be showcased in VR '
    }

    const data4={
        contenttitle:'Model Creation',
        content:'Quickly Create 3D Models required for games using our explicit scene creation services, which generate Environment for your gaming needs.',
        iframe:'https://taanga-studios-website.web.app/?product=gun'
    }

    const data5={
        iframe:'https://taanga-studios-website.web.app/?product=idletoswordunsheath',
        contenttitle:'Chracter Creation',  
        content:'NeRF can be used to create realistic 3D models of characters for gaming quickly and efficiently. With NeRF, it is possible to capture a persons likeness and turn it into a 3D model in a matter of minutes. This can be done using just a few photos of the person from different angles, making it a fast and easy process. These models can then be integrated into game engines, allowing for seamless integration into game development pipelines. '
    }
    
    
return(  
    <>
    <Section1 data={data1} />
    <Section2 data={data2} />
    <Section3 data={data3} />
    <Content data={data4} />
    <Content2 data={data5} />
    
    </>
);
}