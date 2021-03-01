import "./App.css";
import Overview from "./components/Overview";
import ItemInfo from "./components/ItemInfo";
import Map from "./components/Map";
import ItemBoxGroup from './components/ItemBoxGroup';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Overview />
      <ItemInfo />
      <Map />
      
      <ItemBoxGroup></ItemBoxGroup>
    </>
  );
}

export default App;