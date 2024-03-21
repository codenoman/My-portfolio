// src/ContactPage.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './ContactPage.css';
import contactme from "../image/contact.gif"
import socialimg from "../image/contact2.png"
import { useState } from 'react';
import NavigationBar from './NavigationBar';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send form dat
  //     const response = await fetch('nomanalamty@gmail.com', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Email sent successfully!');
  //     } else {
  //       console.error('Failed to send email');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };
  const SendEmail = () => {
    const serviceID = "service_n222x1o"
    const templateID = "template_u6b5kmx"
    const templateParams = {
      name: 'Kashan',
      email: 'ayanmuradahmed@gmail.com',
      message: 'kia hal hai bhai kese hain',
    }
    const publicKey = "vbyP2aw9M-dylsbiq"
    emailjs.send(serviceID, templateID, templateParams, publicKey);

  }

  return (<>
    {/* <NavigationBar /> */}
    <div className="contact-page"><div className="contactme">


      <div className="social-image">
        <div className="contecttextmain"><h5 className='handles'>My Social Media Handles</h5>
          <p className='contact-text'>:

👋 Hey, I'm Noman Alam!  your go-to spot for all things code! 💻 Join me on this coding adventure as we explore the latest tech trends and craft elegant solutions together. Don't forget to hit that follow button and let's level up our coding skills! 🚀 

</p></div>
       </div>
      <div className="social-icons">
 <img src={socialimg} alt="" className='socialimg' />
<div className="icons">
        <a href="https://www.facebook.com/profile.php?id=100086976175238" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/NomanAl79138829" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://wa.me/03190292139" target="_blank" rel="noopener noreferrer" className='whatsapp'>
          <FaWhatsapp />
        </a><br />
        <a href="https://www.instagram.com/kashanhehe/" target="_blank" rel="noopener noreferrer" className='insta'>
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/noman-alam-ba1ab6279/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="nomanalamty@gmail.com">
          <FaEnvelope />
        </a> <br /><br /></div>

      </div>
    </div>
      <div className="social">
        <form >
          
            <h1 className='messege'>Send Message </h1><br />
<div className="messegedivone">
            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
              <label for="name" className="form__label">Name</label>

            </div>
            <div class="form__group field">
              <input type="email" class="form__field" placeholder="Email" name="Email" id='name' required />
              <label for="Email" className="form__label">Email</label></div>


            <br />
</div>
          
          <div className='messegediv'>
            <div class="form__group field">
              <textarea type="text" class="form__fields" placeholder="Text Area" name="Text Area" id='Text Area' required />
              <label for="Text Area" className="form__label">Messege</label></div>

            <button type='button' className='contbtn' onClick={SendEmail}>Send</button></div>
        </form>


      </div>
    </div>



  </>
  );
};

export default ContactPage;
