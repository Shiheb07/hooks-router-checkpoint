/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {  useNavigate ,useParams } from "react-router-dom";
import Movies from "../data/Data";
import { Button } from "react-bootstrap";

const MovieDetail = () => {
    const back= useNavigate()
  const { id } = useParams();
  const find = Movies.find((movie) => movie.id === parseInt(id));

  return (
    <>
      <div>
      <h1> {find.title} </h1>
      <img src={find.imageUrl} alt="" />
      <p> {find.director} </p>
      <p> {find.rating} </p>

<a href=""> 
{find.Trailer}

</a>

      </div>

      <Button onClick={()=> back('/')} variant="primary">Back Home</Button>
    </>
  );
};

export default MovieDetail;
