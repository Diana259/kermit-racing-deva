import styled from 'styled-components';
import { AboutImages, AboutSection, AboutInfo } from './Home';
import CoverSlider from '../components/cover-slider';
import { Facebook } from '@material-ui/icons';

const StyledAbout = styled.div`
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
  width: 90%;

  p{
    margin-top: 5px;
    margin-bottom: none;
  }
  `
  const TeamMembers = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 50px;
  margin: 50px 0;
  `

  const Banner = styled.div`
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

export default function About() {
  
  return (
    <>
      <StyledAbout>
      <CoverSlider/>
        <AboutSection>
          <AboutInfo>
            <h1>??nfiin??area echipei</h1>
            <p>Echipa Kermit Racing Deva a luat na??tere ??n prim??vara anului 2019, din pasiunea fa???? de motociclism, vitez?? ??i adrenalin??. Am realizat c?? toate acestea, pe drumurile publice nu pot fi realizate ??n siguran????, astfel fiind foarte apropia??i, mai exact o mic?? familie, am luat hot??r??rea s?? ??nfiin????m o echip?? de curse pentru a participa la aceste evenimente inedite. Fondatorul este pre??edintele echipei, C??ta Andrei, idea lui a venit ??n toamna anului 2018, dup?? ce unul dintre colegii no??tri a suferit un grav accident de motociclet??, pe un drum public. Andrei ne-a convocat la o mic?? ??edin???? ??i ne-a propus ideea sa minunat??, apoi am luat parte la o etap?? de curse motociciclism vitez??, ??n cadrul evenimentului MotoRC. Ne-a pl??cut foarte mult ideea sa, iar experien??a ??n cadrul evenimentului a fost peste a??tept??rile noastre, astfel am ap??rut ca "o mic?? sc??nteie" ??n motociclismul vitez?? din ??ara noastr??.</p>
          </AboutInfo>
          <AboutImages>
            <img src="/img/home-img/img2.jpg" alt="" ></img>
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
          <h5>KM PARCUR??I</h5>
          </div>
      </Banner>
        <Team>
        <h2>Membrii echipei</h2>
          <TeamInfo>
            <TeamImage><img src='img/about/member3.jpg' alt='Andrei' />
            <ImageContent>
            <h3>C??ta Andrei</h3>
            <a href='https://www.facebook.com/cata.andrei.9' target="_blank" rel='noreferrer'><Facebook/></a>
            </ImageContent>
            </TeamImage>
            <Content>
            <p>Echipa Kermit Racing Deva a luat na??tere ??n prim??vara anului 2019, din pasiunea fa???? de motociclism, vitez?? ??i adrenalin??. Fondatorul este pre??edintele echipei, C??ta Andrei, idea lui a venit ??n toamna anului 2018, dup?? ce unul dintre colegii no??tri a suferit un grav accident de motociclet??, pe un drum public. De??i ??n via??a de zi cu zi, cei ??ase tineri au joburi diferite, pasiunea pentru motociclism i-a unit.
            </p>
            <p>Pre??edintele echipei, <b>Andrei</b> ??i-a ??mbinat munca cu pasiunea, deschiz??ndu-??i ??n urm?? cu ceva timp propriul service de motociclete.</p>
           <p><b>Adrian</b>, fost pilot Kermit ??i actual mecanic al echipei, lucraz?? la o multina??ional?? care produce ??i frunizeaz?? cablaje in domeniul Motorsport si Automotive.</p>
           <p><b>Claudiu</b> este unul dintre mecanicii echipei, lucreaza la o companie care fabric?? mobilier, iar ??n timpul liber confec??ioneaz?? motocilete custom ??i ale obiecte handmade."</p>
           <p><b>Crina</b> face parte din staff-ul echipei, dar ??n via??a de zi cu zi este maganer de produc??ie ??i calitate la o multina??ional?? produc??toare ??i furnizoare de cablaje pentru Motorsport ??i Automotive.</p>
           <p><b>R??zvan</b> este pilotul echipei, dar pe lang?? aceast?? activitate este manager ??ef la multina??ionala unde lucrez?? ceilal??i doi membrii ai echipei.</p>
            </Content>
          </TeamInfo>
          <TeamMembers>
            <TeamImage>
            <img src='img/about/member1.jpg' alt='Razvan'/>
            <ImageContent>
            <h3>Florea R??zvan</h3>
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
            <h3>Gogoa???? Adrian</h3>
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
      </StyledAbout>
    </>
  );
}
