import { Container } from "./MovieCardStyles";


const MovieCard = ({ item }) => {
  return (
    <Container>
         <div className="card">
          <img src={item.Poster} alt="Icon" />
       <p>
       {/* $&#123;Movie Name&#125; */}
       { item.Title }
       </p>
        </div>
    </Container>
  )
}

export default MovieCard