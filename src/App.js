
import './App.css';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorkArea from './pages/WorkArea/WorkArea';
import DentalNavBar from './components/DentalNavBar';
import { useEffect, useState } from 'react';
import User from './data/User';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import Appointment from './data/Appointment';
import Appointments from './pages/Appointments/AppointMents';
import {getDateOnly} from './Utils/Utils.js';
import Parse from 'parse';

function App() {
 const [activeUser, setActiveUser] = useState(null);
 const [appointmentSt, setAppointmentSt] = useState(null);
 const [loading,setLoading] = useState(true);

  let appointments = [
    new Appointment("1", "2021-01-19 08:34:56","c0m8khpWrn", "pMUKng8lhG", "המטופל הגיע עקב כאבי שיניים, לאחר בדיקה התגלה חור בשן 8 בצד ימין עליון. בוצעה עקירה", "", "2005-02-12 12:34:56"),
    new Appointment("2", "2021-01-19 18:42:56","c0m8khpWrn", "pMUKng8lhG", "המטופל הגיע לטיפול הלבנת שינייים, ההלבנה בוצעה בהצלחה", "", "2005-02-22 12:34:56"),
    new Appointment("3", "2021-01-12 12:34:56","c0m8khpWrn", "pMUKng8lhG", "המטופל הגיע עקב שבירת שן 1 ימין, המטופל שמר את השן בתוך כוס עם חלב עד רגע ההגעה למרפאה, השבר טופל והשן חוברה למקומה בהצלחה", "", "2005-02-22 12:34:56"),
    new Appointment("4", "2021-01-19 12:36:56","c0m8khpWrn", "pMUKng8lhG", "למטופל בוצעה עקירה כירורגית של שן בינה", "", "2005-02-22 12:34:56"),
    new Appointment("5", "2021-01-22 13:10:56","4", "pMUKng8lhG", "המטופלת הגיעה לשם קבלת חוות דעת על השתלת שיניים, חוות הבדעת היחא חיובי, ניתן לבצע השתלה. התור נקבע לחודש הבא", "", "2005-02-22 12:34:56"),
    new Appointment("6", "2021-01-18 13:04:56","6", "pMUKng8lhG", "המטופל בן ה-6 הגיע עם אימו, אימו התלוננה על כך שהילד לא מבין את חשיבות צחצוח השיניים. בוצעה עבודת הסברה ", "", "2005-02-22 12:34:56"),
    new Appointment("7", "2021-01-22 13:08:56","7", "pMUKng8lhG", "המטופלת בת 12, אמרה שחשה בושה עקב רווח בין השיניים הקידמיות, בוצעה תבנית גבס של השיניים והוחלט על המשך טיםול של יישור שיניים. נקבעה פגישה נוספת", "", "2005-02-22 12:34:56"),
    new Appointment("8", "2021-01-21 13:20:56","7", "", "המטופל בן 20 שהגיע עקב תזוזה של שיניים לאחר שלפני מספר שנים עשה תהליך של יישור שיניים. מבדיקה עלה שהשיניים זזו עקב בקיעת שיני בינה, הופנה לכירורג לשם עקירה ולאחר מכן התבקש לקבוע תור נוסף לשם המשך טיפול ", "", "2005-02-22 12:34:56"),
    new Appointment("9", "2021-01-22 13:40:56","8", "", "", "המטופל הגיע לבדיקת חצי-שנתית שגרתית. בוצעה הסרת אבנית", "2005-02-22 12:34:56"),
    new Appointment("10", "2021-01-22 13:50:56","7", "", "מטופלת בת 16 הגיעה לשם קבלת ייעוץ ליישור שיניים. בוצעה בדיקה ונמצא מנשך לא תקין, כמו כן נמצא שלא כל השיניים הקבועות בקעו. הוחלט על טיפול מיידי, המטופלת קיבלה הוראה לבצע צילום שינים בתור דבר ראשון", "", "2005-02-22 12:34:56"),
    new Appointment("11", "2021-01-19 13:50:56","c0m8khpWrn", "2", "", "", "2005-02-22 12:34:56")
  ]

  useEffect(()=>
  {
    setAppointmentSt(appointments);
    setLoading(false);
  },[]  );


  function handleLogout ()
  {
    setActiveUser(null);
    Parse.User.logOut();
  } 
  const handleLogin = (logedUser) => setActiveUser(logedUser);

  function returnAppointment(appId)
  {
    const temp = [...appointmentSt];
    temp[appId].pacientId = "";
    setAppointmentSt(temp);
  }

  let activeUserAppoint = [];
  let freeAppoint = [];
  let doctorDailyAppointments = [];

if (!loading)
{
  const curdate = new Date();

   // activeUserAppoint = activeUser ? appointmentSt.filter(item=>item.pacientId === activeUser.id) : [];

   freeAppoint = appointmentSt.filter(item=>item.pacientId === "" &&  item.appDateTime >= curdate);

  //  doctorDailyAppointments = activeUser ? appointmentSt.filter(item=>item.doctorId === activeUser.id 
  //           && getDate(item.appDateTime).valueOf() === getDate(curdate).valueOf() && item.pacientId != "") : [];

  doctorDailyAppointments = activeUser ? appointmentSt.filter(item=>item.doctorId === activeUser.id 
             && item.appDateTime.valueOf() >= curdate.valueOf() && item.pacientId != "") : [];

}
  return (

    <>
    <DentalNavBar   activeUser={activeUser} onLogout={handleLogout}/>
    <div className="p-app">
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage  activeUser={activeUser} onLogin={handleLogin}/></Route>
            <Route exact path="/personal"><PersonalArea activeUser={activeUser} appointments={appointmentSt} returnToList={returnAppointment}/></Route>
            <Route exact path="/personal/:id"><PersonalArea activeUser={activeUser} appointments={appointmentSt} returnToList={returnAppointment}/></Route>
            <Route exact path="/appointments"><Appointments activeUser={activeUser} appointments={freeAppoint}  /></Route>
            <Route exact path="/work"><WorkArea  activeUser={activeUser} appointments={doctorDailyAppointments} /></Route>
            <Route exact path="/contactus"><ContactUs activeUser={activeUser}/></Route>
            <Route exact path="/about"><About  activeUser={activeUser}/></Route>
          </Switch>
        </HashRouter>
    </div>
    </>
  );
}

export default App;
