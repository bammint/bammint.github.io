import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NaviMenu from './components/NaviMenu';
import Home from './pages/Home';
// import Contect from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './styles/ScrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
        <NaviMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          {/* <Route path="/contact">
            <Contect />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}
