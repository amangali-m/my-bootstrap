import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img width={'100%'} height={800}
          className="d-block w-100"
          src="./img/one.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Гостиная "Бельведер"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} height={800}
          className="d-block w-100"
          src="./img/two.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Гостиная "Жемчуг"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} height={800}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Гостиная "Антураж"</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;