import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ResumeFile from "./ResumeFile";
import MyStory from "./MyStory";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollArrow from "./ScrollArrow";
import "./App.css";
import { closeDrawer } from "./utils";

function App() {
  const [drawerState, setDrawerState] = useState("drawer");

  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <Header drawerState={drawerState} setDrawerState={setDrawerState} />
        <main
          onClick={() => {
            closeDrawer(drawerState, setDrawerState);
          }}
        >
          <ScrollArrow />
          <Switch>
            <Route exact path="/">
              <Home drawerState={drawerState} />
            </Route>
            <Route path="/resume">
              <ResumeFile drawerState={drawerState} />
            </Route>
            <Route path="/story">
              <MyStory drawerState={drawerState} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
