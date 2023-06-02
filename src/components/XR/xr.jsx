import Section1 from '../solutionsection1/solutionsection1.component'
import Section2 from '../solutionsection2/solutionsection2.component'
import Section3 from '../solutionsection3/solutionsection3.component'
import Content from '../solutionsection3content/solutionsection3content.component'
import Content2 from '../solutionsection3content2/solutionsection3content2.component'

export default function xr()
{
    const data1={
        title:'3D for XR',
        image:'icons/vr.svg',
        description:'Experience an immersive world with our XR solutions. From virtual reality (VR) to augmented reality (AR), we offer custom integration for your business needs. Our XR solutions can enhance your e-commerce website, gaming experience, and other industries by providing interactive, 3D environments that engage and excite your audience. Explore the possibilities of XR with our expert team and take your business to the next level.',
        iframe:'https://taanga-studios-website.web.app/?product=artroom'
    }

    const data2={
        title:'Need for 3D in XR Industries',
        image:'icons/Nerf.svg',
        title1:'Realism',
        content1:'3D models in XR create a realistic and immersive environment for users, enhancing their experience and engagement with the content.',
        title2:'Interactivity',
        content2:'3D models allow users to interact with the virtual environment, increasing engagement and providing a more hands-on experience.',
        title3:'Immersive Experience',
        content3:'3D models and environments provide a more immersive experience for users, making them feel like they are really there. This enhances the overall XR experience and makes it more engaging for users.'
    }
    const data3={
        title:'Applications',
        subtitle:'Here are various products that can be showcased in VR '
    }

    const data4={
        contenttitle:'Education',
        content:'XR can be used to create immersive learning experiences for students, allowing them to explore and interact with educational content in 3D environments. This can enhance engagement and retention of information, making learning more effective and enjoyable.',
        iframe:'https://taanga-studios-website.web.app/?product=realistichumanheart'
    }

    const data5={
        iframe:'video/Social Media Filter Shoe.webm',
        contenttitle:'Social Media',  
        content:'Customers can view 3D models of electronic devices, such as phones or laptops, to see details and features not visible in traditional product photos. 3D models can also show how accessories, like phone cases or covers, look and fit.'
    }

    const data6={
        contenttitle:'Virtual Events',
        content:'XR can be used to create virtual events, such as conferences, concerts, and exhibitions. By providing an immersive virtual environment, XR can help to replicate the experience of attending a live event, allowing people to connect and engage with each other from anywhere in the world.',
        iframe:'https://taanga-studios-website.web.app/?product=artroom'
    }
    
    
return(  
    <>
    <Section1 data={data1} />
    <Section2 data={data2} />
    <Section3 data={data3} />
    <Content data={data4} />
    <Content2 data={data5} />
    <Content data={data6} />
    
    </>
);
}