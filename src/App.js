import logo from './logo.svg';
import './App.css';

// Components
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import {Route, Switch} from "react-router-dom"

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
