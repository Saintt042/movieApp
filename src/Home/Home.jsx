import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

const Home = () => {
  const [text, setText] = useState("batman");

  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    // const apikey = "c9479a99"

    const apikey = process.env.REACT_APP_API_KEY
    
    const fetchMoviesOne = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${text}&apikey=${apikey} &type=movie`
      );
      const data = await res.json();
      setDataArr(data);
    };
    fetchMoviesOne();
  }, [text]);
  const search = (data) => {
    setText(data);
  };
  return (
    <>
      <Header />
      <Hero />
      <Search search={search} />
      <Card data={dataArr} />
    </>
  );
};

export default Home;
