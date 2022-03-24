import React from 'react'
import emailjs from '@emailjs/browser';
import { Person, Mail, LocalPhone, LocationOnOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { StyledButton } from './Home';
import CoverSlider from '../components/cover-slider';

export default function Contact() {
  const message = "Thanks, I'll replay ASAP";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ozod71r', 'template_a705vaq', e.target, 'TCb6YF-7CG0ZNJQfl')
      .then((result) => {
        if (result)
          return message;
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  const Contact = styled.div`
  display: flex;
  color: rgb(63, 63, 63);
  `
  const ContactLeft = styled.div`
  flex: 1;
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
  `

  const ContactUs = styled.div`
   padding-left: 30px;

     h2 {
       font-size: 2em;
       margin-bottom: 10px;
     }

      .itemContaniner {
        display: flex;
        align-items: center;
        gap: 5px;

        .icon {
          display: flex;
          flex-direction: column;
          font-size: 2.5em;
        }
      }
  `

  const StyledForm = styled.form`
  display: flex;
        flex-direction: column;
        gap: 10px;

        input {
          height: 40px;
          border: none;
          border-top: 1px solid lightgray;
        }

        label{
          font-weight:200px;
        }
  `
  const ContactRight = styled.div`
  padding-top: 50px;
    padding-bottom: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .map {
      width: 70%;
    }
  `
 
  return (
    <>
    <CoverSlider></CoverSlider>
      <Contact>
        <ContactLeft>
          <ContactUs>
            <div>
              <h2>Informatii de contact</h2>
              <div className='itemContaniner'>
                <Person className='icon' />
                <h3>Nume:</h3>
                <span>Căta Andrei</span>
                <LocalPhone className='icon' />
                <h3>Tel:</h3>
                <span>+40 734 490 434</span>
              </div>
              <div className='itemContaniner'>
                <LocationOnOutlined className='icon' />
                <h3>Locația:</h3>
                <span>Strada C.A.Rosetti, Deva, Nr.2B</span>
                <Mail className='icon' />
                <h3>Mail:</h3>
                <span>kermit_racing_deva@yahoo.com</span>
              </div>
              <div className='itemContaniner'>

              </div>

            </div>
            <h2>Trimite un mesaj</h2>
            <StyledForm onSubmit={sendEmail}>
              <label htmlFor='email'>Email:</label>
              <input type='text' id="email" placeholder='Email' name='email' />
              <label htmlFor='subject'>Subiect:</label>
              <input type='text' id="subject" placeholder='Subject' name='subject' />
              <label htmlFor='message'>Mesaj:</label>
              <textarea id="message" placeholder='Message' name='message'></textarea>
              <StyledButton type='submit'>Send</StyledButton>

            </StyledForm>
          </ContactUs>
        </ContactLeft>
        <ContactRight>
          <div className='map'>
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.3642859135293!2d22.916035515086808!3d45.86402091469723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ef2c5958666b5%3A0x8e12acf8151fcbbf!2sStrada%20C.A.%20Rosetti%202B%2C%20Deva%20330182!5e0!3m2!1sro!2sro!4v1647333744079!5m2!1sro!2sro" width={500} height={500} loading="lazy"></iframe>
          </div>
        </ContactRight>
      </Contact>
    </>
  )
}
