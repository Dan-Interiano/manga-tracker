import './App.css';
import NavBar from './components/Navbar/NavBar';
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review';
import Manga from './components/Manga/Manga'
import { ColorModeProvider } from "@chakra-ui/color-mode"


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Manga" component={Manga} />
        <Home />
        <About />
        <Review />
        <Manga />
      </Switch>
    </div>
  );
}

export default App;
