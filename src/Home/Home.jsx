import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

const Home = () => {
  const [text, setText] = useState("batman");
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    const apikey = "c9479a99"
    const fetchMovies = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${text}&apikey=${apikey}`
      );
      const data = await res.json();
      setDataArr(data);
    };
    fetchMovies();
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
