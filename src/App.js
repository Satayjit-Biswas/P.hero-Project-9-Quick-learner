import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Study from './components/Study/Study';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/service'>
              <Service></Service>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        
    </div>
  );
}

export default App;
