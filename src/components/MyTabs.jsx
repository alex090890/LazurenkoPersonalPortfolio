import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import Currentposition from "./Currentposition";
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
          <ol>
            <li>Punctual</li>
            <li>Responsible</li>
            <li>Reliable</li>
            <li>Diligent</li>
          </ol>
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
        <h1 className="itemtitle whitetext">Oleksandr Lazurenko</h1>
        <h2 className="itemtitle whitetext">Fullstack Web Developer</h2>
        <p className="whitetext">If you are interested about my CV and other credentials, please feel free to contact me using the contact form or write directly to my email: <a href="mailto: alex_prof@web.de">alex_prof@web.de</a></p>
        <h3 className="itemtitle whitetext">Languages spoken:</h3>
        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th>Level</th>
              <th>European classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ukrainian</td>
              <td>Mothertongue</td>
              <td>C2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Russian</td>
              <td>Mothertongue</td>
              <td>C2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>English</td>
              <td>Advanced</td>
              <td>C1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>German</td>
              <td>Upper-intermediate</td>
              <td>B2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Chinese</td>
              <td>Beginner's level</td>
              <td>A2</td>
            </tr>
          </tbody>
        </Table>
        <p className="whitetext"> My main stack is MERN (MongoDB, Express, React, Node.js):</p>
        <ul className="whitetext">
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel</li>
          <li>Netlify</li>
        </ul>
        <p className="whitetext">I am always eager to learn, and learning some new skills is always fascinating to me.</p>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
        <h2 className="itemtitle whitetext">Our Location</h2>
        <Currentposition />
        <Address />
        <h2 className="itemtitle whitetext" >Contact me:</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBsAmK4Yo2B6t73BOQstj1dcvFHVT586PCFjQf3zlRn7NE_A/viewform?embedded=true" width="100%" height="676" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </TabPanel>
      <TabPanel>
        <h2 className="itemtitle whitetext"><a href="https://github.com/alex090890"><IoLogoGithub /></a>Portfolio Repositories</h2>
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
      <h2 className="itemtitle whitetext">Language certificates</h2>
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
        <h2 className="itemtitle whitetext">IT certificates</h2>
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
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
