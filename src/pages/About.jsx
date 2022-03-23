import styled from 'styled-components';
import { AboutImages, AboutSection, AboutInfo } from './Home';
import CoverSlider from '../components/cover-slider';
import { Phone , Email } from '@material-ui/icons'

export default function About() {
  const About = styled.div`
   display: flex;
  flex-direction: column;

  h2{
    align-self: center;
    text-transform: capitalize;
    font-size: 2em;
  }
  `
  const Team = styled.div`
  display: flex;
  flex-direction:column;
  margin:50px;

  p{
    text-align: justify;
    font-size: 1.3em;
    color: rgb(83, 83, 83);
  }

  h3{
    border-bottom: 1px solid gray;
    justify-content: center;
  }
  `
  const TeamInfo = styled.div`
  display:flex;
  gap: 60px;

  p{
    font-size: 1em;
  }

  .contact{
    display: flex;
    flex-direction: column;
  }
  `
  const TeamImage = styled.img`
   border-radius: 3px;
   
   &:hover{
     opacity: 0.5;
     content: "Andrei"
   }
  `
  const TeamMembers = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 50px;

  .head-text {
   position: relative;
}
.text-on-image {
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: 15%;
}

  `

  const Banner = styled.image`
  background-image: url('img/about/fun.jpg');
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 1.5em;

  .info{
    display: flex;
    flex-direction:column;
    
    h2{
      margin: 0;
    }
  }
  `
  const Sponsors = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  `
  return (
    <>
      <About>
      <CoverSlider></CoverSlider>
        <AboutSection>
          <AboutInfo>
            <h1>Înființarea echipei</h1>
            <p>Echipa Kermit Racing Deva a luat naștere în primăvara anului 2019, din pasiunea față de motociclism, viteză și adrenalină. Am realizat că toate acestea, pe drumurile publice nu pot fi realizate în siguranță, astfel fiind foarte apropiați, mai exact o mică familie, am luat hotărârea să înființăm o echipă de curse pentru a participa la aceste evenimente inedite. Fondatorul este președintele echipei, Căta Andrei, idea lui a venit în toamna anului 2018, după ce unul dintre colegii noștri a suferit un grav accident de motocicletă, pe un drum public. Andrei ne-a convocat la o mică ședință și ne-a propus ideea sa minunată, apoi am luat parte la o etapă de curse motociciclism viteză, în cadrul evenimentului MotoRC. Ne-a plăcut foarte mult ideea sa, iar experiența în cadrul evenimentului a fost peste așteptările noastre, astfel am apărut ca "o mică scânteie" în motociclismul viteză din țara noastră.</p>
          </AboutInfo>
          <AboutImages>
            <img src="/img/home-img/img2.jpg" alt="" width={600}></img>
            
            </AboutImages>
        </AboutSection>
        <Banner>
        <div className='info'>
          <h2>6</h2>
          <h5>MEMBRI</h5>
        </div>
        <div className='info'>
          <h2>10</h2>
          <h5>EVENIMENTE ORGANIZATE</h5>
        </div>
        <div className='info'>
        <h2>330</h2>
          <h5>CURSE PE CIRCUIT</h5>
          </div>
        <div className='info'>
        <h2>27.360</h2>
          <h5>KM PARCURȘI</h5>
          </div>
      </Banner>
        <Team>
        <h3>Membrii echipei</h3>
          <TeamInfo>
            <TeamImage src='img/about/member3.jpg' alt='Andrei' />
            <p>Echipa Kermit Racing Deva a luat naștere în primăvara anului 2019, din pasiunea față de motociclism, viteză și adrenalină. Fondatorul este președintele echipei, Căta Andrei, idea lui a venit în toamna anului 2018, după ce unul dintre colegii noștri a suferit un grav accident de motocicletă, pe un drum public. Deși în viața de zi cu zi, cei șase tineri au joburi diferite, pasiunea pentru motociclism i-a unit.
              Președintele echipei, Andrei și-a îmbinat munca cu pasiunea, deschizându-și în urmă cu ceva timp propriul service de motociclete.
              Adrian, fost pilot Kermit și actual mecanic al echipei, lucrază la o multinațională care produce și frunizează cablaje in domeniul Motorsport si Automotive.
              Claudiu este unul dintre mecanicii echipei, lucreaza la o companie care fabrică mobilier, iar în timpul liber confecționează motocilete custom și ale obiecte handmade."
              Crina face parte din staff-ul echipei, dar în viața de zi cu zi este maganer de producție și calitate la o multinațională producătoare și furnizoare de cablaje pentru Motorsport și Automotive.
              Răzvan este pilotul echipei, dar pe langă această activitate este manager șef la multinaționala unde lucreză ceilalți doi membrii ai echipei.
            </p>
          </TeamInfo>
          <TeamMembers>
            <TeamImage src='img/about/member1.jpg' alt='Razvan' />
            <TeamImage src='img/about/member2.jpg' alt='Claudiu' />
            <TeamImage src='img/about/member4.jpg' alt='Adi' />
            <TeamImage src='img/about/member5.jpg' alt='Crina' />
          </TeamMembers>
          <h2>Sponsori</h2>
          <Sponsors>
          <img src='img/about/partner1.png' alt='sponsor'/>
          <img src='img/about/partner2.png' alt='sponsor'/>
          <img src='img/about/partner3.png' alt='sponsor'/>
          </Sponsors>
        </Team>
      </About>
    </>
  );
}
