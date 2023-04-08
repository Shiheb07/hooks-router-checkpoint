
import Footer from "./components/Footer";
import MovieList from "./pages/MovieList";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {Routes,Route} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/movies" element={<MovieList />}  />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
