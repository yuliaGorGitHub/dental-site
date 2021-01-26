import { Redirect } from "react-router-dom";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import React, { Component, useMemo, useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import "./WorkArea.css"
import Appointment from "../../data/Appointment";
import Parse from 'parse';

function WorkArea (props)
{
    const {activeUser, appointments} = props;
    const [showModal, setShowModal] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(-1);
    const [workerAppointments, setWorkerAppointments] =  React.useState([]);
  
    const [comment, setComment] = React.useState(null);

    useEffect(()=> {

        async function fetchData() {
           const parseAppointment = Parse.Object.extend('Appointment');
           const query = new Parse.Query(parseAppointment);
           query.notEqualTo("pacientId",null);
           query.equalTo("doctorId", Parse.User.current());
           query.addAscending("appDateTime");  
           const pAppointment = await query.find();
         
           const workerAppointments = pAppointment.map(appointment => new Appointment(appointment));
           const appointmentsWitPacientName = await setPacientName( workerAppointments)
           setWorkerAppointments(appointmentsWitPacientName);

        }
        async function fetchPacient( appointment) {
                    const userQuery = new Parse.Query(Parse.User);
                    userQuery.equalTo("objectId", appointment.pacientId.id);
                    const pacient = await userQuery.get(appointment.pacientId.id) 
                    appointment.pacientName = pacient.get("fname") +" "+ pacient.get("lname");                  
        } 

        async function setPacientName ( appointments) {
            for (const appointment of appointments) {
                const userQuery = new Parse.Query(Parse.User);
                const pacient = await userQuery.get(appointment.pacientId.id) 
                appointment.pacientName = pacient.get("fname")  +" "+ pacient.get("lname");
            }
            return appointments;
        }         
         
        if (activeUser) {
            fetchData();
            }       
      

   },[activeUser]);


    const handleModal = () => setShowModal(!showModal)

    function getCommentFromSelectedRow()
    {
        if( workerAppointments.length > 0)
        {
            const getSelectedRow = workerAppointments.find(item => item.id === selectedRow);
            return getCommentFromSelectedRow = getSelectedRow == undefined ? "" :  getSelectedRow.comments == undefined ? "" : getSelectedRow.comments.replace('/\n/g', '&#13;&#10;');
        }
    }
    
    // if selected row was not changed that comment not needed to be changed also
    const comments = useMemo(() => getCommentFromSelectedRow(), [selectedRow, workerAppointments]);

    function getIndexOfSelected(selectedRow)
    {
        return workerAppointments.findIndex(item => item.id === selectedRow);
    } 

    async function addComment(comment) 
    {
        //console.log("selectedRow  "+ selectedRow);
        const index = workerAppointments.findIndex(item => item.id === selectedRow);
        let temp = [...workerAppointments];

        // remove appointment at index 'index' from array
        temp.splice(index, 1);


       const pAppointment = Parse.Object.extend('Appointment');
       const query = new Parse.Query(pAppointment);
       const pApp = await query.get(selectedRow);
        // get old comment and append new comment
       const curDate = new Date();
       const arr = curDate.toString().split(" ");
       const time = arr[4].substring(0, 5);
       const prev = pApp.get('comments');
       pApp.set('comments', prev +"\n" + time + "\n" + comment);

       pApp.set('updatedBy', Parse.User.current());
       const savedApp = await pApp.save();

       const updatedApp = new Appointment (savedApp);

       // insert updated appointment to array 
       temp.splice(index, 0, updatedApp);

       setWorkerAppointments(temp);
    }

    if(!activeUser || !activeUser.job)
        return <Redirect to="/"/>

    return(
        <>
            <p>today {workerAppointments.length}</p>
            <h3> שלום   { activeUser ?  activeUser.jobStr+" "+activeUser.fname  : ""} </h3>
            <p>Work Area</p>
            {workerAppointments && workerAppointments.length > 0 ?
            <>
             <AppointmentsTable appointments={workerAppointments} fromScreen="work" setShowModal={handleModal} setSelectedRow={setSelectedRow}/>
             <Modal show={showModal} handleClose={handleModal} handleComment={addComment} children={comments}   />
             </>
           :
            <>
             <p>אין לך תורים להיום</p>
            <p>קח ילדים לחופש!</p>
            </>}
        </>
    )
}
export default WorkArea;