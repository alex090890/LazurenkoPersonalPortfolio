import React from "react";
import englishscore from "./Englishscore.jpg";
import goethe from "./Goethe.jpg";
import chinese from "./Chinese HSK.jpg";
import mongodb from "./Mongodb.png";
import codecademy from "./Codecademy.png";
import freecodecamp from "./Freecodecamp.png";
import linkedin from "./Linkedin.png";
import Carousel from 'react-bootstrap/Carousel';

const Certificates = () => {
  return (
    <>
    <div>
      <h2 className="itemtitle">Language certificates</h2>
      <Carousel fade>
        <Carousel.Item>
          <img src={englishscore} alt="Englishscore" className="englishscore" />
          <Carousel.Caption>
            <h3>EnglischScore Certificate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={goethe} alt="Goethe" className="englishscore" />
          <Carousel.Caption>
            <h3>Goethe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={chinese} alt="Chinese" className="englishscore" />
          <Carousel.Caption>
            <h3>Chinese</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div>
        <h2 className="itemtitle">IT certificates</h2>
        <Carousel>
          <Carousel.Item>
            <img src={codecademy} alt="Codecademy" className="englishscore" />
            <Carousel.Caption>
              <h3>Codecademy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={freecodecamp} alt="Freecodecamp" className="englishscore" />
            <Carousel.Caption>
              <h3>Freecodecamp</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={mongodb} alt="Mongodb" className="englishscore" />
            <Carousel.Caption>
              <h3>Mongodb</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={linkedin} alt="Linkedin" className="englishscore" />
            <Carousel.Caption>
              <h3>Linkedin</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </>
  );
};

export default Certificates;
