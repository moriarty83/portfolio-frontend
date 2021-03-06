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
  const URL = "https://portfolio-lab.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer>Page By C. Marshall Moriarty</Footer>

    </div>
  );
}

export default App;
