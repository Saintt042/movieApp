
import { Link } from "react-router-dom"

import Header from "../Header/Header"
import { Container } from "./MoviesStyle"


const Movies = () => {
  return (
    
        <Container>
         <Link to="/">
         <Header />
         </Link>        
        </Container>
  )
}

export default Movies