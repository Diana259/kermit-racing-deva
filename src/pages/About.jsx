import styled from 'styled-components';
import { AboutImages, AboutSection, AboutInfo } from './Home';
import CoverSlider from '../components/cover-slider';
import { Facebook } from '@material-ui/icons';

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

  h2{
    border-bottom: 1px solid gray;
    align-self:center;
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
  const TeamImage = styled.div`
  background-color: #B1FF8A;
  display: flex;
  flex-direction:column;
  border-radius: 9px;
  box-shadow: 10px 5px 5px rgb(115 115 115);
  transition: box-shadow .3s;
  max-height: 430px;

  &:hover{
    box-shadow: 10px 5px 5px rgb(93 91 91);
  }
   
   img{
    border-radius: 9px 9px 0 0 ;
   }
  `

  const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  h3{
    border-bottom: none;
  }
  `

  const Content = styled.div`
  display: flex ;
  flex-direction: column;

  p{
    margin-top: 5px;
    margin-bottom: none;
  }
  `
  const TeamMembers = styled.div`
  display: flex;
  gap: 50px;
  margin: 50px 0;
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
        <h2>Membrii echipei</h2>
          <TeamInfo>
            <TeamImage><img src='img/about/member3.jpg' alt='Andrei' />
            <ImageContent>
            <h3>Căta Andrei</h3>
            <a href='https://www.facebook.com/cata.andrei.9' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
            <Content>
            <p>Echipa Kermit Racing Deva a luat naștere în primăvara anului 2019, din pasiunea față de motociclism, viteză și adrenalină. Fondatorul este președintele echipei, Căta Andrei, idea lui a venit în toamna anului 2018, după ce unul dintre colegii noștri a suferit un grav accident de motocicletă, pe un drum public. Deși în viața de zi cu zi, cei șase tineri au joburi diferite, pasiunea pentru motociclism i-a unit.
            </p>
            <p>Președintele echipei, <b>Andrei</b> și-a îmbinat munca cu pasiunea, deschizându-și în urmă cu ceva timp propriul service de motociclete.</p>
           <p><b>Adrian</b>, fost pilot Kermit și actual mecanic al echipei, lucrază la o multinațională care produce și frunizează cablaje in domeniul Motorsport si Automotive.</p>
           <p><b>Claudiu</b> este unul dintre mecanicii echipei, lucreaza la o companie care fabrică mobilier, iar în timpul liber confecționează motocilete custom și ale obiecte handmade."</p>
           <p><b>Crina</b> face parte din staff-ul echipei, dar în viața de zi cu zi este maganer de producție și calitate la o multinațională producătoare și furnizoare de cablaje pentru Motorsport și Automotive.</p>
           <p><b>Răzvan</b> este pilotul echipei, dar pe langă această activitate este manager șef la multinaționala unde lucreză ceilalți doi membrii ai echipei.</p>
            </Content>
          </TeamInfo>
          <TeamMembers>
            <TeamImage>
            <img src='img/about/member1.jpg' alt='Razvan'/>
            <ImageContent>
            <h3>Florea Răzvan</h3>
            <a href='https://www.facebook.com/floreavlad.razvan' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
            <TeamImage>
            <img src='img/about/member2.jpg' alt='Claudiu' />
            <ImageContent>
            <h3>Ariton Claudiu</h3>
            <a href='https://www.facebook.com/claudiu.ariton.16' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
            <TeamImage>
            <img src='img/about/member4.jpg' alt='Adi' />
            <ImageContent>
            <h3>Gogoașă Adrian</h3>
            <a href='https://www.facebook.com/bigghhy' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
            <TeamImage>
            <img src='img/about/member5.jpg' alt='Crina' />
            <ImageContent>
            <h3>Florea Crina</h3>
            <a href='https://www.facebook.com/profile.php?id=100003217419811' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
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
