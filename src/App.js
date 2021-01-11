import logo from './logo.svg';
import './App.css';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorkArea from './pages/WorkArea/WorkArea';
import DentalNavBar from './components/DentalNavBar';
import { useState } from 'react';

function App() {
  //const [activeUser, setActiveUser] = useState(null);
   const [activeUser, setActiveUser] = useState({tzeut:"123",pwd: "123", fname:"doctor", doctor: true});
  ///const [activeUser, setActiveUser] = useState({tzeut:"1234",pwd: "1234", fname:"client", doctor: false});
 
const handleLogout = () => setActiveUser(null);


  return (

    <>
    <DentalNavBar   activeUser={activeUser} logout={handleLogout}/>
    <div className="p-app">
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage  activeUser={activeUser}/>
            </Route>
            <Route exact path="/personal"><PersonalArea activeUser={activeUser}/>
            </Route>
            <Route exact path="/work"><WorkArea  activeUser={activeUser}/>
            </Route>
          </Switch>
        </HashRouter>
    </div>
    </>
  );
}

export default App;
