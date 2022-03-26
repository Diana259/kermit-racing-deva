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
      transition: background-color 2s;
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

export default function Home() {
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
   gap: 50px;
   `
const RecomandationContainer = styled.div`
display: flex;
flex-direction: column;
background-color: whitesmoke;

&:hover{
  position: relative;
}

img:hover{
  opacity: 0.6;
}
`
const RecomandationInfo = styled.div`
display: none;

&:hover{
  display: contents;
  position: absolute;
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
  let navigate = useNavigate();
  return (
    <>
      <StyledHome>
        <Slider>
        <h2>KERMIT RACING DEVA </h2>
          <p> Nu suntem doar motocicliști, suntem o familie. </p>
        </Slider>
        <AboutSection>
          <AboutInfo>
            <h1>Inființarea echipei</h1>
            <p>Echipa Kermit Racing Deva a luat naștere în primăvara anului 2019, din pasiunea față de motociclism, viteză și adrenalină.
              Am realizat că toate acestea, pe drumurile publice nu pot fi realizate în siguranță.</p>
            <StyledButton
              onClick={() => { navigate("/about"); }}
            >
              {" "}
              Despre noi
            </StyledButton>
          </AboutInfo>
          <AboutImages>
            <img src="/img/home-img/img1.jpg" alt="" width={600}></img>
          </AboutImages>
        </AboutSection>
        <EventBanner>
        <h2>Ești gata să participi la următorul eveniment?</h2>
        <StyledButton
        onClick={() => { navigate("/events"); }}
            >
              {" "}
        Participă</StyledButton>
        </EventBanner>
        <PostsSide>
        </PostsSide>
        <RecommandationsSide>
        <h1>Echipează-te corespunzător!</h1>
        <Wrapper>
        <RecomandationContainer>
        <img src='img/home-img/casca.jpg' alt='casca' width='250px' />
        <RecomandationInfo>Casca integrală este cea mai sigură alegere, având cel mai ridicat nivel de siguranță în caz de accident. Casca trebuie să fie fixă, să te strângă puțin în zona obrajilor, să nu încapă degete între frunte și cască.</RecomandationInfo>
        </RecomandationContainer>
        <RecomandationContainer>
        <img src='img/home-img/combinezon.jpeg' alt='combinezon' width='250px' />
        <RecomandationInfo>Costumele se prezintă în seturi din una și două piese, care oferă același nivel de protecție, ventilație, selecție de materiale ca o jachetă și combinații de pantaloni. S-ar putea susține, de asemenea, că există o impermeabilizare mai bună la costumele dintr-o singură piesă.</RecomandationInfo>
        </RecomandationContainer>
        <RecomandationContainer>
        <img src='img/home-img/ghete.jpeg' alt='ghete' width='250px' />
        <RecomandationInfo>Cizmele touring sunt mai moi și se pot purta o zi întreagă fără să deranjeze. Protecția optimă este oferită de cizmele racing ranforsate, dar acestea devin în general incomode după o jumătate de zi, căci sunt foarte rigide. Trebuie să fie cât mai fixe, fără să fie dureroase.</RecomandationInfo>
        </RecomandationContainer>
        <RecomandationContainer>
        <img src='img/home-img/manusi.jpeg' alt='manusi' width='250px' />
        <RecomandationInfo>Un element din cadrul echipamentului moto, care de multe ori tinde să fie omis. Indiferent că sunt fabricate din material textil sau din piele, mănuşile moto oferă protecţie în cazul căzăturilor, împotriva curenţilor de aer şi oferă un ajutor suplimentar în controlul manșonului de acceleraţie sau a manetelor de frână/ambreiaj.</RecomandationInfo>
        </RecomandationContainer>
        </Wrapper>
        </RecommandationsSide>
      </StyledHome>
    </>
  );
}
