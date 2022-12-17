import { Link } from "react-router-dom"
import { Container } from "./HeaderStyle"



const Header = () => {
  return (
    <Container>
       <Link to="/movies">
    <div className="nav">
   
    <button className="btn">MyTestApp</button>
    </div>
    </Link>
</Container>
  )
}

export default Header