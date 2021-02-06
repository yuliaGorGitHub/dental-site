
import "./Appointments.css"
import React, { useMemo } from 'react';
import { Redirect } from "react-router-dom";  
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import Parse, { User } from 'parse';
import { useEffect } from "react";
import { useState } from "react";
import Appointment from '../../data/Appointment.js';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Input, MenuItem, ThemeProvider, Select, CssBaseline, createMuiTheme, Container, ListItem, ListItemText, Button, withStyles, Grid, FormControlLabel, Switch, TextField, Checkbox, Divider, AccordionActions } from "@material-ui/core";
//import { DatePicker, KeyboardDatePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider,  KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { CheckCircleOutlineSharp, ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';


//import { withStyles } from '@material-ui/core/styles';
// import { ExpandMore } from '@material-ui/icons';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import RedirectComponent from "../../components/RedirectComponent/RedirectComponent";
import { getDateOnly } from "../../Utils/Utils";

//import { AccordionActions, Button, Divider } from '@material-ui/core';



function Appointments (props)
{

    const {jobs, employees, activeUser} = props;
//debugger;
//console.log(Parse.User.current());

    //const [activeUser,setActiveUser] = useState(Parse.User.current() ? new User(Parse.User.current(), "") : null);
    console.log(activeUser);
    const [freeAppointments, setFreeAppointments] = useState([]);  
    const [selectedJob, setSelectedJob] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    // const [selectedBirthDate, setSelectedBirthDate] = useState(new Date());
    const [selectedBirthDate, setSelectedBirthDate] = useState(null);
    const [zeutInput, setZeutInput] = useState("");
    const [expandedPanel, setExpandedPanel] = useState(false);
    const [panel1Filled, setPanel1Filled] = useState(false);
    const [panel1Hide, setPanel1Hide] = useState(false);
    const [panel2Hide, setPanel2Hide] = useState(false);
    const [panel3Hide, setPanel3Hide] = useState(false);
    const [selectedApp, setSelectedApp] = useState("");
    const [doRedirect, setDoRedirect] = useState(false);
    const [redirectTo, setRedirectTo] = useState("");
    


    const handleDateChange = (date) => {
      setSelectedBirthDate(date);

      if(date !== null && date !== "" && selectedJob !== "")
        setPanel1Filled(true);
      else
        setPanel1Filled(false);
    };

    // function inputZeutHandle(e)
    // {
    //     setZeutInput(e.target.value);
    //   // setShowWarning(false);
    // }

    function handleStage1() 
    {
      setPanel1Hide(true);
      setExpandedPanel('panel2');
    }   

    function handleSelectedRow(appId)
    {
      setSelectedApp(appId);
      setPanel2Hide(true);
      setExpandedPanel('panel3');
    }

    function handleStage3()
    {
      setPanel3Hide(true);
      setExpandedPanel('panel4');
      isRegisteredUser();
      debugger;
      // console.log("currentUser  " + currentUser);
      // if(!currentUser)
      //   setDoRedirect(true);
      takeAnAppointment();
    }


    const {selectedJobHome} = useParams();

    useEffect( ()=> {
        async function fetchData(){
          const parseAppointment = Parse.Object.extend('Appointment');
          const query = new Parse.Query(parseAppointment);
          query.exists("doctorId");
          query.greaterThanOrEqualTo("appDateTime", new Date());
          query.equalTo("pacientId", null);
          query.addAscending("appDateTime");  

          query.find().then((parseAppointment) => {
            const allAppointments = parseAppointment.map(appointment => new Appointment(appointment));
            setFreeAppointments(allAppointments);             
          }, (error) => {
            console.error('Error while fetching Appointment', error);
          });
        }
        
        if(jobs.length > 0 && employees.length > 0)
        {
          selectedJobHome ? setSelectedJob(selectedJobHome) : setSelectedJob(jobs[0].jobId);
          fetchData();
        }

    },[jobs, employees]);

    function getAppointmentsByJob(appointments) 
    {
      let temp = [];
      const employeeNum = employees.find(item => item.doctorId === selectedDoctor);

      if (employeeNum != undefined && selectedDoctor !== "")
      {
        for(let i = 0; i < appointments.length; i++)
        {
          if(appointments[i].doctorId.id === selectedDoctor)
              temp = temp.concat(appointments[i]);
         }
        return temp;
      }
      
      const employeesWithSelectedType = employees.filter(item => item.jobId === selectedJob);

      for(let i = 0; i < appointments.length; i++)
      {
        for(let j = 0; j < employeesWithSelectedType.length; j++)
          {
            if(appointments[i].doctorId.id === employeesWithSelectedType[j].doctorId)
                temp = temp.concat(appointments[i]);
          }      
      }
      return temp;
    }


    const appointmentsToDisplay = freeAppointments.length === 0 ? [] : getAppointmentsByJob(freeAppointments);

    async function takeAnAppointment()
    {
      //const isRegistered = isRegisteredUser();
        isRegisteredUser();
        const index = freeAppointments.findIndex(item => item.id === selectedApp);
        let temp = [...freeAppointments];
        // remove appointment at index 'index' from array
        temp.splice(index, 1);

        const pAppointment = Parse.Object.extend('Appointment');
        const query = new Parse.Query(pAppointment);
        const pApp = await query.get(selectedApp);

        pApp.set('pacientId', Parse.User.current());
        pApp.set('updatedBy',Parse.User.current());
        // const savedApp = await pApp.save();

        // const updatedApp = new Appointment (savedApp);
        setFreeAppointments(temp);

    }

    async function isRegisteredUser()
    {
      debugger;
      if(activeUser && activeUser.tzeut === zeutInput)
        return;

      const userQuery = new Parse.Query(Parse.User);
      userQuery.equalTo("tzeut", zeutInput); 
     // userQuery.equalTo("birthdate", getDateOnly(selectedBirthDate)); 
      const currUser = await userQuery.find();
      debugger;
      if (currUser.length !== 0)
      {
          setRedirectTo("/");
        //console.log(Parse.User.current());
        //setCurrentUser(new User(currUser, ""));
      }
      else
      {
        setRedirectTo("/signup");
      }
      debugger;
      //return (currUser.length !== 0);
      setDoRedirect(true);
    }



    const useStyles = makeStyles((theme) => ({
      paper: {
        // padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.primary,
      },
      margin: {
        display: 'inline-block',
        margin: '0 50px 0 50px',
      },
      show: {
        display: 'block',
      },
      hide: {
        display: 'none',
      },
      select: {
        "& ul": {
            backgroundColor: "#cccccc",
        },
        "& li, & p": {
            fontSize: 12,           
        },        
    },
    }));

    const classes = useStyles();

    if (doRedirect)
    {
      // if(redirectTo === "")
      //   return <Redirect to="/signup"/>
      // else
      debugger;
        return <Redirect to={redirectTo}/>
    }

  const StyledButton = withStyles({
    root: {
      background:'rgb(63, 81, 181)',  // "#3f51b5",
      borderTopLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      border: 0,
      color: 'white',
      height: 60,
      width: 200,
      padding: '0 30px',

      boxShadow: '0 3px 5px 2px rgba(63, 81, 181, .3)',
      margin: '0 50px 0 50px',
    },
    label: {
      textTransform: 'capitalize',
    },
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'rgb(63, 81, 181)',
    },
    // "&:hover": {
    //   backgroundColor:'black',
    // },
 
  })(Button);

  const DisableddButton = withStyles({
    root: {
      borderTopLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      border: '2px solid blue',
      color: 'blue',
      height: 60,
      width: 200,
      padding: '0 30px',
      margin: '0 50px 0 50px',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);





  const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      borderRadius: '30px 0px 30px 0',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
//      backgroundColor: '#21CFFF',
 //     backgroundColor: 'transparent',
      // backgroundColor: 'inherit',
      backgroundColor: 'white',
//      borderBottom: '1px solid #12738E',
      marginBottom: -1,
 //     color: '#666666',
 //     borderRadius: '30px 0px 30px 0',
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);


  const handleAccordionChange = (panel) => (event, isExpanded) => {
   // console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };


  const employeesBySelectedType = freeAppointments.length === 0 ? [] : employees.filter(item => item.jobId === selectedJob);

  function HandleStart() 
  {
    setExpandedPanel('panel1');
  }

      let viewSelect = []; 
      for(let i = 0; i < jobs.length; i++)
      {
          viewSelect.push(         
            <MenuItem value={jobs[i].jobId} key={jobs[i].jobId} 
              {...jobs[i].jobId===selectedJob ? "selected" : ""}>
                {jobs[i].jobHebrew}
            </MenuItem> 
            );
      }

    const clNamePanel1 = panel1Hide ? classes.hide : classes.paper;
    const clNamePanel2 = panel2Hide ? classes.hide : classes.paper;
    const clNamePanel3 = panel3Hide ? classes.hide : classes.paper;
    
//  debugger;
//  console.log(Parse.User.current());
// const activeUser = new User(Parse.User);
  // console.log(activeUser);
    return (
        <>
            {/* <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1> */}


            <Grid container justify="space-around" >
            {/*   From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
                  From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
                  From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen. */}



                <Grid item xs={12} className={classes.paper}>                 
                  <StyledButton onClick={HandleStart} style={{ backgroundColor: 'rgb(63, 81, 181)' }}>תאום תור חדש</StyledButton>
                  <DisableddButton>ביטול תור קיים</DisableddButton>
                </Grid>

                <Grid item xs={12} className={classes.paper}>
                  <h3>כאן תוכלו לתאם תור</h3>       
                </Grid>  


                <Grid item xs={12} className={clNamePanel1}>
                <Accordion expanded={expandedPanel === 'panel1'} disabled={expandedPanel !== 'panel1'} 
                      onChange={handleAccordionChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                  <h4>1.	פרטי השירות המבוקש</h4>
                  </AccordionSummary>
                  <AccordionDetails>
 
                  <Grid item xs={12} className={classes.paper}> 
                  {jobs.length > 0 ?
                    <div className={classes.margin}>             
                      <span>סוג התור המבוקש    </span>
                      <CustomSelect arr={jobs} selectedItem={selectedJob}  idKey={"jobId"} valueKey={"jobHebrew"} handleSelected={setSelectedJob} all=""/>
                    </div>
                    : <></>}
                  <div className={classes.margin}> 
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      variant="dialog"
                      format="dd/MM/yyyy"
                      value={selectedBirthDate}
                      onChange={handleDateChange}
                      maxwidth={40}
                      aria-required="true" 
                      aria-invalid="false"
                    />
                  </MuiPickersUtilsProvider>
                  </div>
                </Grid>
                
                  </AccordionDetails>

                  <Divider />
                  <AccordionActions>
                  <Grid item xs={12}> 
                    {/* <div className={classes.margin}>  */}
                      <Button size="small" variant="contained" disabled={!panel1Filled} color="primary" onClick={handleStage1}>
                      המשך לבחירת תור
                      </Button>
                      {/* </div> */}
                      </Grid>
                  </AccordionActions>                  
                </Accordion>
                </Grid>  

                <Grid item xs={12} className={clNamePanel2}>
                  <Accordion expanded={expandedPanel === 'panel2'} disabled={expandedPanel !== 'panel2'}
                       onChange={handleAccordionChange('panel2')}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                  <h4>2.	בחירת תור</h4>
                  </AccordionSummary>
                    <AccordionDetails>
  
                    <Grid item xs={12} className={classes.margin} align="right">
                      <Grid item xs={12} className={classes.margin} align="right">
                        <p MenuProps={{ classes: { paper: classes.select } }} >להלן מועדי התורים הקרובים ביותר ע"פ הבחירה שביצעתם.</p>     
                        <p> אנא בחרו את התור המועדף</p>  
                      </Grid>
                        <Grid item xs={12} className={classes.margin} align="right">
                          {jobs.length > 0 ?
                          <div className={classes.margin}> 
                            <p>בחירת רופא</p>
                            <CustomSelect arr={employeesBySelectedType} selectedItem={selectedDoctor}  idKey={"doctorId"} valueKey={"fullName"} handleSelected={setSelectedDoctor} all="כל הרופאים"/>                          
                          </div>
                          : <></>}
                        </Grid>
                                            
                      {appointmentsToDisplay.length > 0 ?
                        <AppointmentsTable appointments={appointmentsToDisplay}  fromScreen="appoint" takeApp={handleSelectedRow}/>
                      :
                        <h2 style={{color: 'blue'}}>סליחה, כרגע אין אפשרות להזמין תור</h2>
                      }   
                      </Grid>             
                    </AccordionDetails>
                  </Accordion>
                </Grid>  

                <Grid item xs={12} className={clNamePanel3}>
                  <Accordion expanded={expandedPanel === 'panel3'} disabled={expandedPanel !== 'panel3'}
                          onChange={handleAccordionChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <h4>3.  מילוי פרטים אישיים</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid item xs={12} className={classes.margin} align="right">
                        <p>אנא מלאו את הפרטים הבאים</p>  
                      </Grid> 

                        <Grid item xs={12}  dir="rtl">                   
                            <TextField  fullWidth label="ת.ז. של בעל התור *"  value={zeutInput} name="tzeut" size="small" variant="outlined"  onChange={e => setZeutInput(e.target.value)} />
                        </Grid>

                    </AccordionDetails>
                    <AccordionActions>
                    <Grid item xs={12}> 
                        <Button size="small" variant="contained" disabled={zeutInput===""} color="primary" onClick={handleStage3}>
                          המשך
                        </Button>
                      </Grid>
                    </AccordionActions>                  
                  </Accordion>
                </Grid>

                <Grid item xs={12} className={classes.paper}>
                  <Accordion expanded={expandedPanel === 'panel4'} disabled={expandedPanel !== 'panel4'}
                          onChange={handleAccordionChange('panel4')}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                  <h4>4.  אשר את פרטי התור</h4>
                  </AccordionSummary>
                    <AccordionDetails>
  
                    { activeUser ? 
                    <Grid item xs={12} className={classes.margin} align="right">
                      <Grid item xs={12} className={classes.margin} align="right">
                        <h5 >כדי שנוכל לתאם את התור עבורך אנא אשר את הפרטים:</h5>     
                         {/* <p> ת.ז של בעל התור: {activeUser.tzeut}</p>   */}
                       {/* <p> תאריך לידה: {activeUser.birthdate}</p> */}
                        {/* <p> שם פרטי: {activeUser.fname}</p> 
                        <p> שם משפחה: {activeUser.lname}</p>   */}
                      </Grid> 
                    </Grid> 
                     : 
                    <> </> }          
                    </AccordionDetails>
                    <AccordionActions>
                    <Grid item xs={12}> 
                        <Button size="small" variant="contained" color="primary" onClick={takeAnAppointment}>
                        אשר
                        </Button>
                      </Grid>
                    </AccordionActions>                           
                  </Accordion>
                </Grid>  
                               
            </Grid>
         </>
    )
}
export default Appointments;