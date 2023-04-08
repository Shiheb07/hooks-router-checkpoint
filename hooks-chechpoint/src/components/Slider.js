import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    const imgStyle={
        width:'400px'
    }
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img style={imgStyle}
          className="d-block w-100"
          src="img/dj.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={imgStyle}
          className="d-block w-100"
          src="img/therev.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle}
          className="d-block w-100"
          src="img/he.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;