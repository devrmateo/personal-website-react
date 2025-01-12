import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, MyStory, Resume, Error } from "./screens/";
import { Header, Footer } from "./elements/";
import { createContext } from "react";
import { ScrollToTop, ScrollArrow, closeDrawer } from "./utils/";
import "./assets/css/App.css";

export const context = createContext();
const Provider = context.Provider;

const App = () => {
  const [drawerState, setDrawerState] = useState("drawer");

  return (
    <Provider value={drawerState}>
      <Router>
        <ScrollToTop />
        <div className="wrapper">
          <Header setDrawerState={setDrawerState} />
          <main
            onClick={() => {
              closeDrawer(drawerState, setDrawerState);
            }}
          >
            <ScrollArrow />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/story">
                <MyStory />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
