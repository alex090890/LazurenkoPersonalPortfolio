import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import MyMapComponent from "./MyMapComponent";
import Table from 'react-bootstrap/Table';
import Footer from "./Footer";
import { Card } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
const { Meta } = Card;

const MyTabsDe = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Startseite</Tab>
        <Tab>Über mich</Tab>
        <Tab>Kontakt</Tab>
        <Tab>Portfolio-Repositorys</Tab>
        <Tab>Zeugnisse</Tab>
      </TabList>

      <TabPanel>
        <div className="homecontainer">
          <Card hoverable className="homeimage" cover={<img alt="example" src="/Bewerbungsbild.jpg" />}>
          <Meta title="Oleksandr Lazurenko" description="alex_prof@web.de" />
        </Card>
        <Card hoverable title="Willkommen zu AlexProf!" bordered={false} className="homecard" >
          <p>Sehr geehrte Damen und Herren,</p>
          <br />
          <p>willkommen auf der persönlichen Portfolio-Webseite von Oleksandr Lazurenko, einem Fullstack-Webentwickler. Ich kann für Sie eine Website von Grund auf erstellen, angefangen beim Design bis hin zum Backend. Mein Hauptstack ist MERN (MongoDB, Express, React, Node.js). Hier sind meine Stärken:</p>
          <ul>
            <li>Pünktlichkeit</li>
            <li>Verantwortungsgefühl</li>
            <li>Zuverlässigkeit</li>
            <li>Fleißigkeit</li>
            </ul>
            <p>Da ich mehr als neun Jahre in China gelebt und gearbeitet habe, habe ich sehr gute Erfahrungen in der Kommunikation mit Kunden gesammelt, was heutzutage eine sehr wichtige Fähigkeit ist.</p>
            <p>Wenn Sie Fragen haben, zögen Sie bitte nicht, mich zu kontaktieren.</p>
            <p>Mit freundlichen Grüßen,</p>
            <br />
            <p>Oleksandr Lazurenko</p>
            <hr />
            <Footer />
          </Card>
        </div>
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">Oleksandr Lazurenko</h1>
        <h2 className="itemtitle ">Fullstack Web Entwickler</h2>
        <p>Wenn Sie über meinen Lebenslauf und andere Anmeldeinformationen unterhalten sind, können Sie mich gerne mit dem Kontaktformular kontaktieren oder direkt in meine E -Mail schreiben: <a href="mailto: alex_prof@web.de" className="email">alex_prof@web.de</a></p>
        <h3 className="itemtitle">Gesprochene Sprachen</h3>
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Sprache</th>
              <th>Niveau</th>
              <th>Europäische Klassifizierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/ukraine (1).png" className="langicon" /></td>
              <td>Ukrainisch</td>
              <td>Muttersprache</td>
              <td>C2</td>
            </tr>
            <tr>
              <td><img src="/united-states-of-america (1).png" className="langicon" /></td>
              <td>Englisch</td>
              <td>Fortgeschrittene Stufe</td>
              <td>C1</td>
            </tr>
            <tr>
              <td><img src="/germany (2).png" className="langicon" /></td>
              <td>German</td>
              <td>Mittelstufe</td>
              <td>B2</td>
            </tr>
            <tr>
              <td><img src="/china (1).png" className="langicon" /></td>
              <td>Chinese</td>
              <td>Anfänger Stufe</td>
              <td>A2</td>
            </tr>
          </tbody>
        </Table>
        <p>Mein Hauptstack ist MERN (MongoDB, Express, React, Node.js):</p>
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel</li>
          <li>Netlify</li>
        </ul>
        <p>Ich bin immer gespannt auf das Lernen, und es ist mir immer faszinierend, neue Fähigkeiten zu lernen.</p>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">Standort</h1>
        <h2 className="itemtitle">Anschrift</h2>
        <Address />
        <MyMapComponent />
        <h2 className="itemtitle">Kontaktieren Sie mich</h2>
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
      <h2 className="itemtitle">Sprachzeugnisse</h2>
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
        <h2 className="itemtitle">IT-Zeugnisse</h2>
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

export default MyTabsDe;
