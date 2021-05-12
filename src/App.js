import './App.css';
import Home from './pages/Home'
import Services from './pages/Services'
import AboutPage from './pages/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={(props)=><Home  {...props}></Home>}/>
          <Route exact path='/services' render={(props)=><Services  {...props}></Services>}/>
          <Route exact path='/aboutus' render={(props)=><AboutPage  {...props}></AboutPage>}/>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
