import Carousel from 'react-bootstrap/Carousel';
import '../../pages/HomePage.css'

export default function Slide() {
  return (
    <Carousel className='slideContainer'>
      <Carousel.Item interval={4000}>
      <img
          className="d-block w-100"
          src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Cosmic_Shear_1200_Social.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Product 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-the-vast-expanse-of-the-cosmos-a-3d-rendering-of-celestial-image_3851057.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="d-block w-100"
          src="https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Product 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
