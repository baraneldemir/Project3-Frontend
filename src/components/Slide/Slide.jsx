import Carousel from 'react-bootstrap/Carousel';

export default function Slide() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Cosmic_Shear_1200_Social.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-the-vast-expanse-of-the-cosmos-a-3d-rendering-of-celestial-image_3851057.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}
