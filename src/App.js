import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ResumeFile from "./ResumeFile";
import MyStory from "./MyStory";
import Footer from "./Footer";
import { createContext } from "react";
import ScrollToTop from "./ScrollToTop";
import ScrollArrow from "./ScrollArrow";
import "./App.css";
import { closeDrawer } from "./utils";

export const context = createContext();
const Provider = context.Provider;

function App() {
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
                <ResumeFile />
              </Route>
              <Route path="/story">
                <MyStory />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
