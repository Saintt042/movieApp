import { useState } from "react";
import { Container } from "./SearchStyle";

const Search = ({ search }) => {
  const [text, setText] = useState("")
  const handleChange = (e) => {
    setText(e.target.value)
    // console.log(text)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    search(text)
  }

  return (
    <Container>
      <div className="searchS">
        <form onSubmit={handleSubmit}>
          <h1>Search</h1>
          <input type="text" value={text} onChange={handleChange} />
          
        </form>
      </div>
    </Container>
  );
};

export default Search;
