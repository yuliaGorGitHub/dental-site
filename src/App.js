
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
import {getDate} from './Utils/Utils.js'

function App() {
 const [activeUser, setActiveUser] = useState(null);
 const [appointmentSt, setAppointmentSt] = useState(null);
 const [loading,setLoading] = useState(true);

  let users = [
    new User("1", "123", "123", "יוסי", "הלוי" ,"1955-01-01","m", "050-1111111", "yosi@gmail.com","doctor"),
    new User("2", "1234", "1234", "דנה", "פורתר" ,"1963-12-18","f", "052-2222222", "dana@gmail.com",""),
    new User("3", "12345", "12345", "מאשה", "Planker" ,"1955-01-01","f", "052-3333333", "moshe@gmail.com",""),
    new User("4", "234", "234", "Gabi", "Topaz" ,"2005-02-22","m", "052-4444444", "gabi@gmail.com","doctor"),
    new User("5", "345", "345", "Avital", "Topaz" ,"1980-03-30","f", "054-5555555", "avital@gmail.com",""),
    new User("6", "456", "456", "David", "Samual" ,"1994-04-15","m", "055-5555555", "avital@gmail.com","hygienist"),
    new User("7", "567", "567", "אורטל", "כחלוני" ,"2005-02-22","m", "052-4444444", "gabi@gmail.com","ortodont"),
    new User("8", "678", "678", "דויד", "שניידר" ,"1994-04-15","m", "055-5555555", "avital@gmail.com","hygienist")
  ]

  let appointments = [
    new Appointment("1", "2021-01-14 08:34:56","1", "2", "המטופל הגיע עקב כאבי שיניים, לאחר בדיקה התגלה חור בשן 8 בצד ימין עליון. בוצעה עקירה", "", "2005-02-12 12:34:56"),
    new Appointment("2", "2021-01-12 14:04:56","1", "2", "המטופל הגיע לטיפול הלבנת שינייים, ההלבנה בוצעה בהצלחה", "", "2005-02-22 12:34:56"),
    new Appointment("3", "2021-01-12 12:34:56","4", "2", "המטופל הגיע עקב שבירת שן 1 ימין, המטופל שמר את השן בתוך כוס עם חלב עד רגע ההגעה למרפאה, השבר טופל והשן חוברה למקומה בהצלחה", "", "2005-02-22 12:34:56"),
    new Appointment("4", "2021-01-12 12:34:56","4", "2", "למטופל בוצעה עקירה כירורגית של שן בינה", "", "2005-02-22 12:34:56"),
    new Appointment("5", "2021-01-22 13:04:56","4", "2", "המטופלת הגיעה לשם קבלת חוות דעת על השתלת שיניים, חוות הבדעת היחא חיובי, ניתן לבצע השתלה. התור נקבע לחודש הבא", "", "2005-02-22 12:34:56"),
    new Appointment("6", "2021-01-22 13:04:56","6", "2", "המטופל בן ה-6 הגיע עם אימו, אימו התלוננה על כך שהילד לא מבין את חשיבות צחצוח השיניים. בוצעה עבודת הסברה ", "", "2005-02-22 12:34:56"),
    new Appointment("7", "2021-01-22 13:04:56","7", "2", "המטופלת בת 12, אמרה שחשה בושה עקב רווח בין השיניים הקידמיות, בוצעה תבנית גבס של השיניים והוחלט על המשך טיםול של יישור שיניים. נקבעה פגישה נוספת", "", "2005-02-22 12:34:56"),
    new Appointment("8", "2021-01-22 13:04:56","7", "", "המטופל בן 20 שהגיע עקב תזוזה של שיניים לאחר שלפני מספר שנים עשה תהליך של יישור שיניים. מבדיקה עלה שהשיניים זזו עקב בקיעת שיני בינה, הופנה לכירורג לשם עקירה ולאחר מכן התבקש לקבוע תור נוסף לשם המשך טיפול ", "", "2005-02-22 12:34:56"),
    new Appointment("9", "2021-01-22 13:04:56","8", "", "", "המטופל הגיע לבדיקת חצי-שנתית שגרתית. בוצעה הסרת אבנית", "2005-02-22 12:34:56"),
    new Appointment("10", "2021-01-22 13:04:56","7", "", "מטופלת בת 16 הגיעה לשם קבלת ייעוץ ליישור שיניים. בוצעה בדיקה ונמצא מנשך לא תקין, כמו כן נמצא שלא כל השיניים הקבועות בקעו. הוחלט על טיפול מיידי, המטופלת קיבלה הוראה לבצע צילום שינים בתור דבר ראשון", "", "2005-02-22 12:34:56"),
  ]
  useEffect(()=>
  {
    setAppointmentSt(appointments);
    setLoading(false);
  },[]  );


  const handleLogout = () => setActiveUser(null);
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

   activeUserAppoint = activeUser ? appointmentSt.filter(item=>item.pacientId === activeUser.id) : [];

   freeAppoint = appointmentSt.filter(item=>item.pacientId === "" &&  item.appDateTime >= curdate);


  // display appointments for doctor only for one current day
   doctorDailyAppointments = activeUser ? appointmentSt.filter(item=>item.doctorId === activeUser.id 
            && getDate(item.appDateTime).valueOf() === getDate(curdate).valueOf() && item.pacientId != "") : [];

}
  return (

    <>
    <DentalNavBar   activeUser={activeUser} onLogout={handleLogout} users={users}/>
    <div className="p-app">
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage  activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
            <Route exact path="/personal"><PersonalArea activeUser={activeUser} appointments={activeUserAppoint} returnToList={returnAppointment}/></Route>
            <Route exact path="/personal/:id"><PersonalArea activeUser={activeUser} appointments={activeUserAppoint} returnToList={returnAppointment}/></Route>
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
