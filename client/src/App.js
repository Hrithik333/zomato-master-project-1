// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

// components
import Temp from "./Components/Temp";
import Master from "./Components/Master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;
