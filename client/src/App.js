// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

// components
import Home from "./Page/Home";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
    </>
  );
}

export default App;
