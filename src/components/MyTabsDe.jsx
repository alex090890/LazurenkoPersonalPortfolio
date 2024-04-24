import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import Certificates from "./certificates/Certificates";
import Currentposition from "./Currentposition";
import Table from 'react-bootstrap/Table';
import Footer from "./Footer";
import { Card } from 'antd';
import { IoLogoGithub } from "react-icons/io";
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
        <Card hoverable title="Welcome to AlexProf!" bordered={false} className="homecard" >
          <p>Sehr geehrte Damen und Herren,</p>
          <br />
          <p>willkommen auf der persönlichen Portfolio-Webseite von Oleksandr Lazurenko, einem Fullstack-Webentwickler. Ich kann für Sie eine Website von Grund auf erstellen, angefangen beim Design bis hin zum Backend. Mein Hauptstack ist MERN (MongoDB, Express, React, Node.js). Hier sind meine Stärken:</p>
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
        <h1 className="itemtitle">Oleksandr Lazurenko</h1>
        <h2 className="itemtitle">Fullstack Web Developer</h2>
        <p>If you are interessted about my CV and other credentials, please feel free to contact me using the contact form or write directly to my email: <a href="mailto: alex_prof@web.de">alex_prof@web.de</a></p>
        <h3 className="itemtitle">Languages spoken:</h3>
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
        <h2 className="itemtitle">Our Location</h2>
        <Currentposition />
        <Address />
        <h2 className="itemtitle">Contact me:</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBsAmK4Yo2B6t73BOQstj1dcvFHVT586PCFjQf3zlRn7NE_A/viewform?embedded=true" width="100%" height="676" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </TabPanel>
      <TabPanel>
        <h2 className="itemtitle"><a href="https://github.com/alex090890"><IoLogoGithub /></a>Portfolio Repositories</h2>
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
        <Certificates />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabsDe;
