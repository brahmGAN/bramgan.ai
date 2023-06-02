import './footer.css'

export default function footer(){
return (
    <div className="footer" >
      <div className='socialMedia' style={{marginTop:'10px'}}>
            <a href='https://t.me/+bVr0c3Ck9AQyMTE1'><img  src={'/icons/telegram.svg'} alt={''} /></a>
            <a href='https://twitter.com/brahmGAN_'><img style={{marginLeft:'10px'}} src={'/icons/twitter.svg'} alt={''} /></a>
            <a href='https://www.instagram.com/brahmgan/'><img style={{marginLeft:'10px'}} src={'/icons/instagram.svg'} alt={''} /></a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFciWqj1LljVQAAAYeZjezgVcG6ibWZvPrhtEKR9duQsK_Tf0jda2VPJvIJ063xkfGnO7oWqYjvw-dxnoie8RntI6NdJBxuqAOe3-CFRgLY6wfUl4YeqAHIkGMa8YLZdSUpCCw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbrahmgan%2F"> <img style={{marginLeft:'10px'}} src={'/icons/linkedin.svg'} alt={''} /></a>
       </div>
      <div>
        <p>&copy; 2023 My brahmGAN Website</p>
      </div>
    </div>
  );
}