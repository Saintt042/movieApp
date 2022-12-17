import { Container } from "./HeroStyle";
import bg from '../assets/bg.png';


const Hero = () => {
  return (
    <Container>
        
        <div>
        <img src={bg} alt="Background" />
            <h1>Watch <br /> something <br /> incredible.</h1>
        </div>
    </Container>
  )
}

export default Hero