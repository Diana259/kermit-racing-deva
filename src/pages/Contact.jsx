import React, {useState, useEffect} from 'react'
import emailjs, { sendForm } from '@emailjs/browser';
import { Person, Mail, LocalPhone, LocationOnOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { StyledButton } from './Home';
import CoverSlider from '../components/cover-slider';

export default function Contact() {
 const [message, setMessage] = useState(false)

 const handleSubmit = (e)=> {
   e.preventDefault();

   setMessage(true);
 }
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
  flex-wrap: wrap;
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
  `
  const ContactInfo = styled.div`
  display: flex;
  flex-direction:column;
  `
  const Informations = styled.div`
display: flex;
align-items: center;

`
  const InformationsDetails = styled.div`
display:flex;
width: 100%;
gap:7px;

.icon {
  display: flex;
  flex-direction: column;
  font-size: 2.2em;
}
`

  const InformationsContainer = styled.div`
display: flex;
max-width:290px;
align-items:center;
flex: 1;
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
            <ContactInfo>
              <h2>Informatii de contact</h2>
              <Informations>
                <InformationsDetails>
                  <InformationsContainer>
                    <Person className='icon' />
                    <span>Căta Andrei</span>
                  </InformationsContainer>
                  <InformationsContainer>
                    <LocalPhone className='icon' />
                    <span>+40 734 490 434</span>
                  </InformationsContainer>
                </InformationsDetails>
              </Informations>
              <Informations>
                <InformationsDetails>
                  <InformationsContainer>
                    <LocationOnOutlined className='icon' />
                    <span>Strada C.A.Rosetti, Deva, Nr.2B</span>
                  </InformationsContainer>
                  <InformationsContainer>
                    <Mail className='icon' />
                    <span>kermit_racing_deva@yahoo.com</span>
                  </InformationsContainer>
                </InformationsDetails>
              </Informations>

            </ContactInfo>
            <h2>Trimite un mesaj</h2>
            <StyledForm onSubmit={sendEmail && handleSubmit}>
              <label htmlFor='email'>Email:</label>
              <input type='text' id="email" placeholder='Email' name='email' />
              <label htmlFor='subject'>Subiect:</label>
              <input type='text' id="subject" placeholder='Subject' name='subject' />
              <label htmlFor='message'>Mesaj:</label>
              <textarea id="message" placeholder='Message' name='message'></textarea>
              <StyledButton type='submit'>Send</StyledButton>
              {message && <span>Mulțumim! Vom răspunde în curînd!</span>}
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
