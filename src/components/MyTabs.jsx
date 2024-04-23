import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import Certificates from "./certificates/Certificates";
import Currentposition from "./Currentposition";
import Social from "./Social";
import Footer from "./Footer";
import { Card } from 'antd';
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
          <p>welcome to the personal portfolio webpage of Oleksandr Lazurenko, a fullstack web developer. I can build a website for you from the scratch, starting with the design and ending with the backend. My main stack is MERN (MongoDB, Express, React, Node.js). Here are my strengths:</p>
          <ol>
            <li>Punctual</li>
            <li>Responsible</li>
            <li>Reliable</li>
            <li>Diligent</li>
          </ol>
            <p>If you would like to learn more, please do not hesitate to contact me.</p>
            <hr />
            <Footer />
          </Card>
        </div>
      </TabPanel>
      <TabPanel>
        <Social />
      </TabPanel>
      <TabPanel>
        <h2>Our Location</h2>
        <Currentposition />
        <Address />
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel>
        <Certificates />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
