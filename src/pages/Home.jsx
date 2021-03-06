import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export const StyledButton = styled.button`
width: 150px;
background-color: rgb(62, 175, 10);
border-radius: 5px 20px 5px 20px;
border: 1px solid rgb(62, 175, 10);
padding: 10px 15px;
color: white;
font-size: 1em;
font-weight: bold;
transition: background-color 3s ease-in;
cursor: pointer;
      
  &:hover {
    background-color: rgb(127, 236, 73);
    border: 1px solid rgb(127, 236, 73);
    color: rgb(62, 175, 10);
  }
`
export const AboutSection = styled.div`
display: flex;
padding-top: 100px;
padding-bottom: 100px;
`
export const AboutInfo = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-left: 50px;
padding-right: 50px;

  h2 {
    align-self: flex-start;
    font-size: 1em;
  }

  p {
    padding-bottom: 20px;
    color: rgb(83, 83, 83);
    font-size: 1em;
    text-align: justify;
  }
  `


export const AboutImages = styled.div`
  flex: 1;
    display: flex;
    padding-right: 20px;

    img {
      border-radius: 30px;
      animation: Image 5s ease;
      max-width: 100%;
      height: auto;
    }

    @keyframes Image {
      0%{
        transform: translateX(300px);
      }
      100%{
        transform: translateX(0);
      }
    }
`

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  `

  const Slider = styled.div`
   background-image: url('img/home-img/slider3.JPG');
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;

    h2 {
      padding-top: 170px;
      font-family: "Audiowide", cursive;
      font-size: 75px;
      margin-bottom: 0;
      animation: titleAnimation 3s ease-in;
    }
     
    p{
      font-size: 1.9em;
      animation: parahraphAnimation 3s ease-in;
    }

    
    @keyframes titleAnimation {
        0%{
          transform: translateX(900px);
      }
      100%{
        transform: translateX(0);
      }
     }

     @keyframes parahraphAnimation {
       0%{
         transform: translateX(-900px);
       }
       100%{
         transform: translateX(0);
       }
     }
  `
  const EventBanner = styled.div`
  background-image: url('img/event.jpg');
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  
  h2{
    color: white;
  font-size: 1.7em;
  }
  `

  const RecommandationsSide = styled.div`
  background-image: url('img/recomandation.jpg');
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  padding: 40px 0;
  height: 400px;
  margin-top: 50px;

  h1{
    color: whitesmoke;
  }
  `
  const Wrapper = styled.div`
   display: flex;
   align-items:center;
  justify-content:center;
  flex-wrap: wrap;
   gap: 50px;
   `
  const RecomandationContainer = styled.div`
  position: relative;
display: flex;
flex-direction: column;
background-color: whitesmoke;

img{
  position: relative;
  z-index: 9;

  &:hover{
    opacity: 0.3;
    z-index: 3;
  }
}
`
 const RecomandationInfo = styled.div`
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0 10px;
 text-align: justify;
 height: 330px;
 z-index: 6;

 h5{
  font-weight: 200;
 }
 `

  const PostsSide = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;

  img{
    position: relative;
  }
  p{
    position: absolute;
  }
  `

export default function Home() {
  
  let navigate = useNavigate();

  return (
    <>
      <StyledHome>
        <Slider>
          <h2>KERMIT RACING DEVA </h2>
          <p> Nu suntem doar motocicli??ti, suntem o familie. </p>
        </Slider>
        <AboutSection>
          <AboutInfo>
            <h1>Infiin??area echipei</h1>
            <p>Echipa Kermit Racing Deva a luat na??tere ??n prim??vara anului 2019, din pasiunea fa???? de motociclism, vitez?? ??i adrenalin??.
              Am realizat c?? toate acestea, pe drumurile publice nu pot fi realizate ??n siguran????.</p>
            <StyledButton
              onClick={() => { navigate("/about"); }}
            >
              {" "}
              Despre noi
            </StyledButton>
          </AboutInfo>
          <AboutImages>
            <img src="/img/home-img/img1.jpg" alt="" ></img>
          </AboutImages>
        </AboutSection>
        <EventBanner>
          <h2>E??ti gata s?? participi la urm??torul eveniment?</h2>
          <StyledButton
            onClick={() => { navigate("/events"); }}
          >
            {" "}
            Particip??</StyledButton>
        </EventBanner>
        <PostsSide>
        </PostsSide>
        <RecommandationsSide>
          <h1>Echipeaz??-te corespunz??tor!</h1>
          <Wrapper>
            <RecomandationContainer>
              <img src='img/home-img/casca.jpg' alt='casca' width='250px' />
              <RecomandationInfo>
              <h5>Casca integral?? este cea mai sigur?? alegere, av??nd cel mai ridicat nivel de siguran???? ??n caz de accident. Casca trebuie s?? fie fix??, s?? te str??ng?? pu??in ??n zona obrajilor, s?? nu ??ncap?? degete ??ntre frunte ??i casc??.</h5></RecomandationInfo>
              </RecomandationContainer>
            <RecomandationContainer>
              <img src='img/home-img/combinezon.jpeg' alt='combinezon' width='250px' />
              <RecomandationInfo>
              <h5>Costumele se prezint?? ??n seturi din una ??i dou?? piese, care ofer?? acela??i nivel de protec??ie, ventila??ie, selec??ie de materiale ca o jachet?? ??i combina??ii de pantaloni. S-ar putea sus??ine, de asemenea, c?? exist?? o impermeabilizare mai bun?? la costumele dintr-o singur?? pies??.</h5>
              </RecomandationInfo>
            </RecomandationContainer>
            <RecomandationContainer>
              <img src='img/home-img/ghete.jpeg' alt='ghete' width='250px' />
              <RecomandationInfo>
              <h5>Cizmele touring sunt mai moi ??i se pot purta o zi ??ntreag?? f??r?? s?? deranjeze. Protec??ia optim?? este oferit?? de cizmele racing ranforsate, dar acestea devin ??n general incomode dup?? o jum??tate de zi, c??ci sunt foarte rigide. Trebuie s?? fie c??t mai fixe, f??r?? s?? fie dureroase.</h5>
              </RecomandationInfo>
            </RecomandationContainer>
            <RecomandationContainer>
              <img src='img/home-img/manusi.jpeg' alt='manusi' width='250px' />
              <RecomandationInfo>
              <h5>Un element din cadrul echipamentului moto, care de multe ori tinde s?? fie omis. Indiferent c?? sunt fabricate din material textil sau din piele, m??nu??ile moto ofer?? protec??ie ??n cazul c??z??turilor (fiind ranforsate ??n anumite puncte specifice), ??mpotriva curen??ilor de aer (calzi sau reci) ??i ofer?? un ajutor suplimentar ??n controlul man??onului de accelera??ie sau a manetelor de fr??n??/ambreiaj.</h5>
              </RecomandationInfo>
            </RecomandationContainer>
          </Wrapper>
        </RecommandationsSide>
      </StyledHome>
    </>
  );
}
