import Carousel from 'react-bootstrap/Carousel';
import '../../pages/HomePage.css'
import './Slide.css'

export default function Slide() {
  return (
    <Carousel>
      <Carousel.Item className="slide-image" interval={8000}>
      <img
          className="d-block "
          
          src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Cosmic_Shear_1200_Social.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item className="slide-image" interval={8000}>
      <img
          className="d-block "
          
          src="https://www.gannett-cdn.com/-mm-/df58975a4db91bea7e8c0875366a3c24eebdcab5/c=0-31-1280-993/local/-/media/2017/02/01/Reno/RGJ/636215634914521096-image001.jpg?width=2560"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slide-image" interval={8000}>
      <img
          className="d-block"
          
          src="https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}