import './App.css';
import NavBar from './components/Navbar/NavBar';
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Favorites from './components/Favorites/Favorites'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Home />
        <About />
        <Contact />
        <Favorites />
      </Switch>
    </div>
  );
}

export default App;
