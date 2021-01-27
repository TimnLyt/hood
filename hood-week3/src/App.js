import "./App.css";
import Overview from "./components/Overview";
import ItemInfo from "./components/ItemInfo";
import Map from "./components/Map";
import ItemBoxGroup from './components/itemBoxGroup';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Overview />
      <ItemInfo />
      <Map />
      <Nav></Nav> 
      
    <ItemBoxGroup></ItemBoxGroup>
    </>
  );
}

export default App;
