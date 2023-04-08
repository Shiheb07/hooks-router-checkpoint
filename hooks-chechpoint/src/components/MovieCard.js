import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({ img, title, director, rate, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>director: {director}</span>
          <span>rating: {rate}</span>
        </Card.Text>
        <Link to={`/movies/${id}`}>
          <Button variant="primary">Show detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
