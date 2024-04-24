import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Address from "./Address";
import MyMapComponent from "./MyMapComponent";
import Table from 'react-bootstrap/Table';
import Footer from "./Footer";
import { Card } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
const { Meta } = Card;

const MyTabsCn = () => {
return (
    <Tabs>
      <TabList>
        <Tab>主页</Tab>
        <Tab>关于我</Tab>
        <Tab>联系方式</Tab>
        <Tab>投资组合库</Tab>
        <Tab>证书</Tab>
      </TabList>

      <TabPanel>
        <div className="homecontainer">
          <Card hoverable className="homeimage" cover={<img alt="example" src="/Bewerbungsbild.jpg" />}>
          <Meta title="Oleksandr Lazurenko" description="alex_prof@web.de" />
        </Card>
        <Card hoverable title="欢迎来 AlexProf!" bordered={false} className="homecard" >
          <p>尊敬的女士们、先生们，</p>
          <br />
          <p>欢迎来到全栈 Web 开发人员 Oleksandr Lazurenko 的个人作品集网页。竭诚为您从头开始构建网站，源于设计，始于后端。专注于 MERN (MongoDB、Express、React、Node.js)。以下是我的优势: </p>
          <ul>
            <li>准时</li>
            <li>负责</li>
            <li>可靠</li>
            <li>勤奋</li>
          </ul>
          <p>由于我在中国生活和工作了九年多，我在与客户沟通方面获得了非常好的经验，这是当今非常重要的技能。</p>
            <p>如需了解详情，请随时与我联系。</p>
            <p>祝一切顺利，</p>
            <br />
            <p>Oleksandr Lazurenko</p>
            <hr />
            <Footer />
          </Card>
        </div>
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">Oleksandr Lazurenko(亚历克斯)</h1>
        <h2 className="itemtitle">全栈网络开发人员</h2>
        <p>如果您对我的简历和其他资历感兴趣，请随时联系，或致电邮件：<a href="mailto: alex_prof@web.de" className="email">alex_prof@web.de</a></p>
        <h3 className="itemtitle">使用语言</h3>
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>语言</th>
              <th>等级</th>
              <th>欧洲分类</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/ukraine (1).png" className="langicon" /></td>
              <td>乌克兰语</td>
              <td>母语</td>
              <td>C2</td>
            </tr>
            <tr>
              <td><img src="/united-states-of-america (1).png" className="langicon" /></td>
              <td>英语</td>
              <td>先进水平</td>
              <td>C1</td>
            </tr>
            <tr>
              <td><img src="/germany (2).png" className="langicon" /></td>
              <td>德语</td>
              <td>上级水平</td>
              <td>B2</td>
            </tr>
            <tr>
              <td><img src="/china (1).png" className="langicon" /></td>
              <td>中文</td>
              <td>初学者的水平</td>
              <td>A2</td>
            </tr>
          </tbody>
        </Table>
        <p>专注于： MERN (MongoDB、Express、React、Node.js): </p>
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel</li>
          <li>Netlify</li>
        </ul>
        <p>孜孜以求，精益求精，学习新技能，总是极具吸引力。</p>
        <hr />
        <Footer />
      </TabPanel>
      <TabPanel>
        <h1 className="itemtitle">我们的位置</h1>
        <h2 className="itemtitle">邮寄地址</h2>
        <Address />
      <MyMapComponent />
      <p><span className="notice"><b>! 注意: </b></span>中国大陆的领土上没有地图和Google表格, 请通过电子邮件与我联系: <a href="mailto: alex_prof@web.de" className="email">alex_prof@web.de</a></p>
        <h2 className="itemtitle" >联系表</h2>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBsAmK4Yo2B6t73BOQstj1dcvFHVT586PCFjQf3zlRn7NE_A/viewform?embedded=true" width="100%" height="676" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      <hr />
      <Footer />
      </TabPanel>
      <TabPanel>
        <h2 className="itemtitle"><a href="https://github.com/alex090890" target="_blank"><img src="/github.png" className="social" /></a>投资组合库</h2>
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
      <h2 className="itemtitle">语言证书</h2>
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
        <h2 className="itemtitle">IT证书</h2>
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

export default MyTabsCn;
