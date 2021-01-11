import logo from './logo.svg';
import './App.css';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorkArea from './pages/WorkArea/WorkArea';
import DentalNavBar from './components/DentalNavBar';

function App() {
  return (

    <>
    <DentalNavBar />
    <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/personal">
              <PersonalArea />
            </Route>
            <Route exact path="/work">
              <WorkArea />
            </Route>
          </Switch>
        </HashRouter>
    </div>
    </>
  );
}

export default App;
