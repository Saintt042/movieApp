// import { useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"
import { Container } from "./CardStyle"


const Card = ({ data }) => {
  
   const arr = (data.Search)
  console.log(arr)
  
  return (
    <Container>
       <div className="first">
       <h1> $&#123;Movie Category Name&#125;</h1>
       <div className="cards">
        {
          !arr ? <h2>Loading...</h2>:arr.map((item, indx) => (
            <MovieCard key={indx} item={item} />
           ))
        }
       
       </div>
       <h2> $&#123;Movie Category Name&#125;</h2>
       <div className="cardss">
        {
          !arr ? <h2>Loading...</h2>:arr.map((item, indx) => (
            <MovieCard key={indx} item={item} />
           ))
        }
       
       </div>
       </div>

    </Container>
  )
}

export default Card