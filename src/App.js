import "./App.css";
import ItemDesc from "./components/ItemDesc";
import ItemInfo from "./components/ItemInfo";
import Map from "./components/Map";
import PriceTag from "./components/PriceTag";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <PriceTag />
      <ItemDesc />
      <ItemInfo />
      <Map />
      <UserProfile />
    </>
  );
}

export default App;
