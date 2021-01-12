import logo from './logo.svg';
import './App.css';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorkArea from './pages/WorkArea/WorkArea';
import DentalNavBar from './components/DentalNavBar';
import { useState } from 'react';
import User from './data/User';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import Appointment from './data/Appointment';
import Appointments from './pages/Appointments/AppointMents';

function App() {
 const [activeUser, setActiveUser] = useState(null);

let users = [
   new User("1", "123", "123", "יוסי", "הלוי" ,"1955-01-01","m", "050-1111111", "yosi@gmail.com","doctor"),
   new User("2", "1234", "1234", "דנה", "פורתר" ,"1963-12-18","f", "052-2222222", "dana@gmail.com",""),
   new User("3", "12345", "12345", "מאשה", "Planker" ,"1955-01-01","f", "052-3333333", "moshe@gmail.com",""),
   new User("4", "234", "234", "Gabi", "Topaz" ,"2005-02-22","m", "052-4444444", "gabi@gmail.com","doctor"),
   new User("5", "345", "345", "Avital", "Topaz" ,"1980-03-30","f", "054-5555555", "avital@gmail.com",""),
   new User("6", "456", "456", "David", "Samual" ,"1994-04-15","m", "055-5555555", "avital@gmail.com","hygienist")
]

let appointments = [
  new Appointment("1", "2005-02-22 12:34:56","1", "", "", "", "2005-02-22 12:34:56"),
  new Appointment("2", "2005-02-22 14:34:56","1", "", "", "", "2005-02-22 12:34:56"),
  new Appointment("3", "2005-02-22 12:34:56","4", "", "", "", "2005-02-22 12:34:56"),
  new Appointment("4", "2005-02-22 12:34:56","6", "", "", "", "2005-02-22 12:34:56"),
  new Appointment("5", "2005-02-22 13:04:56","4", "", "", "", "2005-02-22 12:34:56"),
  new Appointment("6", "2005-02-22 13:04:56","6", "", "", "", "2005-02-22 12:34:56"),
]


const handleLogout = () => setActiveUser(null);
const handleLogin = (logedUser) => setActiveUser(logedUser);

  return (

    <>
    <DentalNavBar   activeUser={activeUser} onLogout={handleLogout} users={users}/>
    <div className="p-app">
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage  activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
            <Route exact path="/personal"><PersonalArea activeUser={activeUser} users={users}/></Route>
            <Route exact path="/appointments"><Appointments activeUser={activeUser}/></Route>
            <Route exact path="/work"><WorkArea  activeUser={activeUser} users={users}/></Route>
            <Route exact path="/contactus"><ContactUs activeUser={activeUser}/></Route>
            <Route exact path="/about"><About  activeUser={activeUser}/></Route>
          </Switch>
        </HashRouter>
    </div>
    </>
  );
}

export default App;
