import Section1 from '../solutionsection1/solutionsection1.component'
import Section2 from '../solutionsection2/solutionsection2.component'
import Section3 from '../solutionsection3/solutionsection3.component'
import Content from '../solutionsection3content/solutionsection3content.component'
import Content2 from '../solutionsection3content2/solutionsection3content2.component'

export default function ecommerce ()
{
    const data1={
        title:'3D for E-Commerce',
        image:'icons/cart.svg',
        description:'Our 3D solutions are highly beneficial for eCommerce websites and companies as they can provide an immersive and engaging experience for their customers. With our 3D infrastructure, clients can request custom 3D models of their products. Which will be delivered swiftly using our community of 3D content creators, that can be seamlessly integrated into your eCommerce workflow. Our NeRF technology also allows for quick and easy creation of 3D models, reducing production time and costs.',
        iframe:'https://taanga-studios-website.web.app/?product=fendi'
    }

    const data2={
        title:'Why 3D in E-Commerce?',
        image:'icons/Nerf.svg',
        title1:'3D Product Display',
        content1:'Embedding 3D models on product pages for a more engaging shopping experience.',
        title2:'AR/VR Shopping',
        content2:'Using 3D models for augmented and virtual reality experiences, allowing customers to "try before they buy" and making online shopping more interactive.',
        title3:'Product Customization',
        content3:'Offering customers the ability to customize products in 3D, enabling them to visualize and create their desired product.'
    }
    const data3={
        title:'Applications',
        subtitle:'Here are various products that can be showcased in VR '
    }

    const data4={
        contenttitle:'Furniture Shopping',
        content:'Customers can view 3D models of furniture in their homes through AR/VR experiences to see how they will look and fit before making a purchase. We can also allow customers to modify or customize content.',
        iframe:'https://taanga-studios-website.web.app/?product=shelf'
    }

    const data5={
        iframe:'https://taanga-studios-website.web.app/?product=tv',
        contenttitle:'Electronics shopping',  
        content:'Customers can view 3D models of electronic devices, such as phones or laptops, to see details and features not visible in traditional product photos. 3D models can also show how accessories, like phone cases or covers, look and fit.'
    }

    const data6={
        contenttitle:'Jewellery shopping',
        content:'Customers can view 3D models of electronic devices, such as phones or laptops, to see details and features not visible in traditional product photos. 3D models can also show how accessories, like phone cases or covers, look and fit.',
        iframe:'https://taanga-studios-website.web.app/?product=ring'
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