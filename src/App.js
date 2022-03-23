
import NavBar from './components/Navbar/NavBar';
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review';
import Manga from './components/Manga/Manga'
import Footer from './components/Footer/footer';
import { useContext } from "react"
import { ThemeContext } from "./context";
import Toggle from './components/Toggle/Toggle';
import Title from './components/Title/Title'

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    
    <div className="App" style={{backgroundColor:darkMode ? "#1B1811": "#EAEAEA", color:darkMode && "white"}}>
      <Toggle />
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Manga" component={Manga} />
        <Route exact path="/mangas/:id" component={Title} />
        <Home />
        <About />
        <Review />
        <Manga />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
