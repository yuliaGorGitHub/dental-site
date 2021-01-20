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
           query.exists("pacientId");
           query.equalTo("doctorId", Parse.User.current());
           query.addAscending("appDateTime");  
           const pAppointment = await query.find();

           debugger;
           setWorkerAppointments(pAppointment.map(appointment => new Appointment(appointment)));            
           const newArray = [... workerAppointments];
           newArray.forEach(appointment => {
               fetchDoctor(appointment);
           })


        }
        async function fetchDoctor( appointment) {
        debugger;
                    const userQuery = new Parse.Query(Parse.User);
                    userQuery.equalTo("objectId", appointment.pacientId.id);
                    const pacient = await userQuery.get(appointment.pacientId.id) 
                    appointment.pacientName = pacient.get("fname") +" "+ pacient.get("lname");                  
            }    
           

        if (activeUser) {
            fetchData();
            }       
      

   },[activeUser]);


    // const HandleModal = () => setShowModal(!showModal)

    function getCommentFromSelectedRow()
    {
        const getSelectedRow = workerAppointments.find(item => item.id === selectedRow);
        return getCommentFromSelectedRow = getSelectedRow == undefined ? "" : getSelectedRow.comments;
    }
    
    const comments = useMemo(() => getCommentFromSelectedRow(), [selectedRow]);
  
    function HandleModal ()
    {
        setShowModal(!showModal)
    }


    function addComment(id, comment) 
    {
       //appointments[id] = comments;
       setShowModal(!showModal);
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
             <AppointmentsTable appointments={workerAppointments} fromScreen="work" setShowModal={HandleModal} setSelectedRow={setSelectedRow}/>
             <Modal show={showModal} handleClose={addComment}  
                        children={comments}   />
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