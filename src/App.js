import MyTabs from "./components/MyTabs";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <Header />
        <MyTabs />
      </div>
    </div>
  );
}
