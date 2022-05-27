import { useContext } from 'react';
import About from './components/about/About';
import About2 from './components/about/About2'
import About3 from './components/about/About3'
import About4 from './components/about/About4'
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro'
import ProductList from './components/ProductList/ProductList';
import ProductList2 from './components/ProductList/ProductList2';
import ProductList3 from './components/ProductList/ProductList3';
import Mohammadareed from './components/artistsandowners/Mohammadareed'
import Toggle from './components/toggle/Toggle';
import { ThemContext } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const theme = useContext(ThemContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode && "white"}}>
      <Router>
      <Route exact path='/' component={Toggle} />
      <Route exact path='/' component={Intro} />
      <Route exact path='/' component={About} />
      <Route exact path='/' component={About2} />
      <Route exact path='/' component={About3} />
      <Route exact path='/' component={About4} />
      <Route exact path='/' component={ProductList} />
      <Route exact path='/' component={ProductList2} />
      <Route exact path='/' component={ProductList3} />
      <Route exact path='/' component={Contact} />
      <Route exact path='/webdevelopment' component={Toggle} />
      <Route exact path='/webdevelopment' component={Intro} />
      <Route exact path='/webdevelopment' component={About} />
      <Route exact path='/webdevelopment' component={Contact} />
      <Route exact path='/socialmedia' component={Toggle} />
      <Route exact path='/socialmedia' component={Intro} />
      <Route exact path='/socialmedia' component={About2} />
      <Route exact path='/socialmedia' component={Contact} />
      <Route exact path='/mobiledevelopment' component={Toggle} />
      <Route exact path='/mobiledevelopment' component={Intro} />
      <Route exact path='/mobiledevelopment' component={About3} />
      <Route exact path='/mobiledevelopment' component={Contact} />
      <Route exact path='/musicproduction' component={Toggle} />
      <Route exact path='/musicproduction' component={Intro} />
      <Route exact path='/musicproduction' component={About4} />
      <Route exact path='/musicproduction' component={Contact} />
      <Route exact path='/mohammadareed' component={Mohammadareed} />
      </Router>
    </div>
  );
}

export default App;
