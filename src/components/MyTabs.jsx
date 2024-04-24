import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import MyMapComponent from "./MyMapComponent";
import Table from 'react-bootstrap/Table';
import Footer from "./Footer";
import { Card } from 'antd';
import { IoLogoGithub } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
const { Meta } = Card;

const MyTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>About me</Tab>
        <Tab>Contact Details</Tab>
        <Tab>Portfolio Repositories</Tab>
        <Tab>Certificates</Tab>
      </TabList>

      <TabPanel>
        <div className="homecontainer">
          <Card hoverable className="homeimage" cover={<img alt="example" src="/Bewerbungsbild.jpg" />}>
          <Meta title="Oleksandr Lazurenko" description="alex_prof@web.de" />
        </Card>
        <Card hoverable title="Welcome to AlexProf!" bordered={false} className="homecard" >
          <p>Dear Ladies and Gentlemen,</p>
          <br />
          <p>welcome to the personal portfolio webpage of Oleksandr Lazurenko, a fullstack web developer. I can build a website for you from the scratch, starting with the design and ending with the backend. My main stack is MERN (MongoDB, Express, React, Node.js). Here are my strengths:</p>
          <ul>
            <li>Punctual</li>
            <li>Responsible</li>
            <li>Reliable</li>
            <li>Diligent</li>
          </ul>
          <p>As I have lived in and worked in China for more than nine years, I got a very good experience in communicating with clients, which is a very important skill nowadays.</p>
            <p>If you would like to learn more, please do not hesitate to contact me.</p>
            <p>With the best wishes,</p>
            <br />
            <p>Oleksandr Lazurenko</p>
            <hr />
            <Footer />
          </Card>
        </div>
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">Oleksandr Lazurenko</h1>
        <h2 className="itemtitle">Fullstack Web Developer</h2>
        <p>If you are interested about my CV and other credentials, please feel free to contact me using the contact form or write directly to my email: <a href="mailto: alex_prof@web.de" className="email">alex_prof@web.de</a></p>
        <h3 className="itemtitle">Languages spoken:</h3>
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Language</th>
              <th>Level</th>
              <th>European classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/ukraine (1).png" className="langicon" /></td>
              <td>Ukrainian</td>
              <td>Mothertongue</td>
              <td>C2</td>
            </tr>
            <tr>
              <td><img src="/united-states-of-america (1).png" className="langicon" /></td>
              <td>English</td>
              <td>Advanced</td>
              <td>C1</td>
            </tr>
            <tr>
              <td><img src="/germany (2).png" className="langicon" /></td>
              <td>German</td>
              <td>Upper-intermediate</td>
              <td>B2</td>
            </tr>
            <tr>
              <td><img src="/china (1).png" className="langicon" /></td>
              <td>Chinese</td>
              <td>Beginner's level</td>
              <td>A2</td>
            </tr>
          </tbody>
        </Table>
        <p> My main stack is MERN (MongoDB, Express, React, Node.js):</p>
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel</li>
          <li>Netlify</li>
        </ul>
        <p>I am always eager to learn, and learning some new skills is always fascinating to me.</p>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">Our Location</h1>
        <h2 className="itemtitle">Postal adress</h2>
        <Address />
        <MyMapComponent />
        <h2 className="itemtitle" >Contact me:</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBsAmK4Yo2B6t73BOQstj1dcvFHVT586PCFjQf3zlRn7NE_A/viewform?embedded=true" width="100%" height="676" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
        <h2 className="itemtitle"><a href="https://github.com/alex090890" target="_blank"><img src="/github.png" className="social" /></a>Portfolio Repositories</h2>
        <div className="imagecontainer">
          <img src="/Screenshot 2024-04-24 09.53.01.png" alt="portfolio sample 1" className="imagecard" />
          <img src="/Screenshot 2024-04-24 09.55.52.png" ale="portfolio sample 2" className="imagecard" />
          <img src="/Screenshot 2024-04-24 10.10.25.png" alt="portfolio sample 3" className="imagecard" />
          <img src="/Screenshot 2024-04-24 10.14.29.png" alt="portfolio sample 4" className="imagecard" />
          <img src="/Screenshot 2024-04-24 10.18.14.png" alt="portfolio sample 5" className="imagecard" />
        </div>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
                <div>
          <div>
      <h2 className="itemtitle">Language certificates</h2>
      <Carousel fade>
        <Carousel.Item>
          <img src="/Englishscore.jpg" alt="Englishscore" className="englishscore" />
          <Carousel.Caption>
            <h3>EnglischScore Certificate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Goethe.jpg" alt="Goethe" className="englishscore" />
          <Carousel.Caption>
            <h3>Goethe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Chinese HSK.jpg" alt="Chinese" className="englishscore" />
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
            <img src="/Codecademy.png" alt="Codecademy" className="englishscore" />
            <Carousel.Caption>
              <h3>Codecademy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Freecodecamp.png" alt="Freecodecamp" className="englishscore" />
            <Carousel.Caption>
              <h3>Freecodecamp</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Mongodb.png" alt="Mongodb" className="englishscore" />
            <Carousel.Caption>
              <h3>Mongodb</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Linkedin.png" alt="Linkedin" className="englishscore" />
            <Carousel.Caption>
              <h3>Linkedin</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          </div>
          <hr />
          <Footer />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
