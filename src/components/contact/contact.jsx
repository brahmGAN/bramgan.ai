import React, { useState } from 'react';
import './contact.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

export default function ContactUs() {
 
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    const firebaseConfig = {
        apiKey: "AIzaSyCfSlEt6aagNBepS-1tPsd_xUWL5iQFiPw",
        authDomain: "brahmgan-7d2dd.firebaseapp.com",
        databaseURL: "https://brahmgan-7d2dd-default-rtdb.firebaseio.com",
        projectId: "brahmgan-7d2dd",
        storageBucket: "brahmgan-7d2dd.appspot.com",
        messagingSenderId: "492014097456",
        appId: "1:492014097456:web:765c00dd671d7c869889f5",
        measurementId: "G-QZRGQ65V81"
    };
    
    // Initialize Firebase
    initializeApp(firebaseConfig);
  const database = getDatabase();

 
  const pushData = () => {
    const userRef = ref(database, 'user');
    const newUserRef = push(userRef);
    set(newUserRef, {
      firstname: fname,
      lastname: lname,
      email: email,
      message: message
    }).catch((error) => {
      console.error(error);
    });
  }

    return(
    
        <div className='page'>
            <div>
                <h1 className='title'>Contact Us</h1>
            </div>
            <div className='pageContainer'>
                <div className='detailsBox'>
                  <div style={{displa:'flex', flexDirection:'row'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <label>First Name</label>
                      <input className='box' type='text' value={fname} onChange={(event) => setFname(event.target.value)} />
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <label>Last Name</label>
                      <input className='box' type='text' value={lname} onChange={(event) => setLname(event.target.value)} />
                    </div>
                  </div>
                    <label>Email</label>
                    <input className='box' type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label>Message</label>
                    <textarea className='box' row='3'value={message} onChange={(event) => setMessage(event.target.value)} />
                    <button style={{marginTop:"20px"}} className='btn' onClick={pushData}>Send</button>
                </div>
                <div className='contentBox'>
                    <h3>Get in Touch</h3>
                    <h4>Do get in touch with us or if you would like to visit us, we have offices in Singapore and Bangalore.. Drop your mail or ping us on social media, and we will be happy to assist you.</h4>
                    <h4>123-456-7890</h4>
                    <h4>info@brahmgan.com</h4>
                    <div className='socialMedia' style={{marginTop:'10px'}}>
            <a href='https://t.me/+bVr0c3Ck9AQyMTE1'><img  src={'/icons/telegram.svg'} alt={''}/></a>
            <a href='https://twitter.com/brahmGAN_'><img style={{marginLeft:'10px'}} src={'/icons/twitter.svg'} alt={''} /></a>
            <a href='https://www.instagram.com/brahmgan/'><img style={{marginLeft:'10px'}} src={'/icons/instagram.svg'} alt={''} /></a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFciWqj1LljVQAAAYeZjezgVcG6ibWZvPrhtEKR9duQsK_Tf0jda2VPJvIJ063xkfGnO7oWqYjvw-dxnoie8RntI6NdJBxuqAOe3-CFRgLY6wfUl4YeqAHIkGMa8YLZdSUpCCw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbrahmgan%2F"> <img style={{marginLeft:'10px'}} src={'/icons/linkedin.svg'} alt={''} /></a>
       </div>
                </div>
            </div>
        </div>
        
    );

}
