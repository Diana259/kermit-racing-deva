import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
width: 150px;
      background-color: rgb(62, 175, 10);
      border-radius: 5px 20px 5px 20px;
      border: 1px solid rgb(62, 175, 10);
      padding: 10px 15px;
      color: rgb(36, 36, 36);
      font-size: 1em;
      transition: background-color 1s;
      cursor: pointer;

      &:hover {
        background-color: rgb(127, 236, 73);
        border: 1px solid rgb(127, 236, 73);
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
      font-size: 2em;
    }

    p {
      padding-top: 20px;
      padding-bottom: 20px;
      color: rgb(83, 83, 83);
      font-size: 1.3em;
      text-align: justify;
    }
`


export const AboutImages = styled.div`
  flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-right: 20px;

    img {
      border-radius: 30px;
    }
`

export default function Home() {

  const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  //margin-top: 90px;
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
     }

    p{
      font-size: 1.7em;
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
            <img src="/img/home-img/img1.jpg" alt="" width={300}></img>
            <img src="/img/home-img/img2.jpg" alt="" width={300}></img>
            <img src="/img/home-img/img3.jpg" alt="" width={600}></img>
          </AboutImages>
        </AboutSection>
      </StyledHome>
    </>
  );
}
