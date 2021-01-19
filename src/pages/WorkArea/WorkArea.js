import { Redirect } from "react-router-dom";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import React, { Component, useMemo } from "react";
import Modal from "../../components/Modal/Modal";
import "./WorkArea.css"

function WorkArea (props)
{
    const {activeUser, appointments} = props;
    const [showModal, setShowModal] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(-1);
  
    const [comment, setComment] = React.useState(null);

    // const HandleModal = () => setShowModal(!showModal)

    function getCommentFromSelectedRow()
    {
        const getSelectedRow = appointments.find(item => item.id === selectedRow);
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
            <p>today {appointments.length}</p>
            <h3> שלום   { activeUser ?  activeUser.jobStr+" "+activeUser.fname  : ""} </h3>
            <p>Work Area</p>
            {appointments && appointments.length > 0 ?
            <>
             <AppointmentsTable appointments={appointments} fromScreen="work" setShowModal={HandleModal} setSelectedRow={setSelectedRow}/>
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