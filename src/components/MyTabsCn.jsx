import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import Currentposition from "./Currentposition";
import Social from "./Social";

const MyTabsCn = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Головна</Tab>
        <Tab>Про мене</Tab>
        <Tab>Контактні дані</Tab>
        <Tab>Мої проекти</Tab>
        <Tab>Сертифікати</Tab>
      </TabList>

      <TabPanel>
        <h2>Ласкаво просимо</h2>
      </TabPanel>
      <TabPanel>
        <Social />
      </TabPanel>
      <TabPanel>
        <h2>Наше місцезнаходженн/</h2>
        <Currentposition />
        <Address />
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabsCn;
