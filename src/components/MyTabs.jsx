import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import Certificates from "./certificates/Certificates";
import Currentposition from "./Currentposition";
import Social from "./Social";

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
        <h2>Welcome</h2>
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
