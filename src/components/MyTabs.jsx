import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Currentposition from "./Currentposition";

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
      <TabPanel></TabPanel>
      <TabPanel>
        <h2>Our Location</h2>
        <Currentposition />
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default MyTabs;
