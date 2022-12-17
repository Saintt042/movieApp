import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Movies from "./Movies/Movies";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
