import logo from './logo.svg';
import './App.css';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorkArea from './pages/WorkArea/WorkArea';
import DentalNavBar from './components/DentalNavBar';
import { useState } from 'react';

function App() {
 const [activeUser, setActiveUser] = useState(null);

let users = [
  {tzeut:"123",pwd: "123", fname:"Piter doctor", isDoctor: true},
  {tzeut:"1234",pwd: "1234", fname:"Dana client", isDoctor: false},
  {tzeut:"12345",pwd: "12345", fname:"Moshe client", isDoctor: false},
  {tzeut:"234",pwd: "234", fname:"Gabi doctor", isDoctor: true},
  {tzeut:"345",pwd: "345", fname:"Avital client", isDoctor: false}

]



const handleLogout = () => setActiveUser(null);
const handleLogin = (logedUser) => setActiveUser(logedUser);

  return (

    <>
    <DentalNavBar   activeUser={activeUser} onLogout={handleLogout} users={users}/>
    <div className="p-app">
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage  activeUser={activeUser} users={users} onLogin={handleLogin}/>
            </Route>
            <Route exact path="/personal"><PersonalArea activeUser={activeUser} users={users}/>
            </Route>
            <Route exact path="/work"><WorkArea  activeUser={activeUser} users={users}/>
            </Route>
          </Switch>
        </HashRouter>
    </div>
    </>
  );
}

export default App;
