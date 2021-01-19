import './CollapsibleRow.css';
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';   
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';    
import TableRow from '@material-ui/core/TableRow'; 
//import axios from 'axios';     
import { Box, Collapse, IconButton, Link, Typography } from "@material-ui/core";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';




function CollapsibleRow (props)
{
    const {appointments,fromScreen, returnToList, row, index, setShowModal, setSelectedRow} = props;

    const [open, setOpen] = React.useState(false);
   
    const useStyles = makeStyles({  
        root: {  
          width: '90%',
          margin: '0 auto',    
        },  
        container: {  
          maxHeight: 440, 
        },  
        displayFlex: { 
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: "baseline",
        },
        padding: {
            paddingTop: 0,
            paddingBottom: 0,       
        },
        //style for font size
        resize:{
            fontSize: 14
      },
        right: {
 //           diraction: "ltr", 
            textAlign: "right"
        },
        hover: {
            "&:hover": {
            //   backgroundColor: "#D4F1F4",
              opacity: "0.7"
            }
        },
        even: {
            backgroundColor: '#E3E8E9'            
        },
        odd: {
            backgroundColor: '#DDFFE7'            
        },        
        footer: {
            "& > td > div": {
                height: 30,
                minHeight: 30
            },
            backgroundColor: "grey",
             height: 30,
             minHeight: 30
        }
     }); 

     const classes = useStyles();
  
      
      function removeApp(id) {
        returnToList(id-1);
      }


    //   function addComment(id, comments) {
    //     setShowModal(!showModal);
    //   }

      function openModal(id)
      {
        setSelectedRow(id);
        setShowModal();
      }

    return (

        <>
            <TableRow  key={row.id} className={`${classes.hover} ${index % 2 ? classes.even :  classes.odd}`}>
                <TableCell className={`${classes.padding} ${classes.right}`}>{row.appDate}</TableCell>  
                <TableCell className={`${classes.padding} ${classes.right}`}>{row.appWeekDay}</TableCell>  
                <TableCell className={`${classes.padding} ${classes.right}`}>{row.appStartTime}</TableCell>  
                <TableCell className={`${classes.padding} ${classes.right}`}>{row.doctorId}</TableCell>                       
                <TableCell className={`${classes.padding} ${classes.right}`} value={row.id}>
                {
                    (fromScreen === "appoint") ?                                 
                    <IconButton edge="start"  color="inherit"  aria-label="create" dir="rtl" className={classes.padding}  value={row.id} >
                        <HowToRegIcon fontSize="small" color="primary" />
                    </IconButton >   
                    :  (fromScreen === "work"  ?
                     <div  className={`${classes.padding} ${classes.displayFlex}`}>
                        <Link href={ `#/personal/${row.pacientId}` }  className={classes.resize} >
                            {row.pacientId}
                        </Link>    
                        <IconButton edge="start"  color="inherit"  aria-label="create" dir="rtl" className={classes.padding}
                                    onClick={() => openModal(row.id)}
                                    >  
                            <ImportContactsIcon fontSize="small" color="primary"/>
                        </IconButton > 
                       
                     </div>     

                    : (
                        (fromScreen === "pActive") ?                              
                        <IconButton edge="start"  color="inherit"  aria-label="create" dir="rtl" className={classes.padding}
                                    onClick={() => removeApp(row.id)} >  
                            <PersonAddDisabledIcon fontSize="small" color="primary"/>
                        </IconButton > 
                        :
                        (
                        fromScreen === "pHistory" ?
                        <>
                            <IconButton edge="start"  color="inherit"  aria-label="create" dir="rtl" className={classes.padding}  onClick={() => setOpen(!open)}>  
                            <InfoIcon fontSize="small" color="primary"/>
                            </IconButton > 
                           

                        {/* <IconButton aria-label="expand row"  size="small"  onClick={() => setOpen(!open)} >
                            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </IconButton> */}

                        </>                                       
                            : ""
                        )
                    ))
                }
                </TableCell>  
            </TableRow>  

            <TableRow key={row.appDateTime} className={`${classes.right} ${index % 2 ? classes.even :  classes.odd}`}>
                <TableCell className={`${classes.padding} ${classes.right}`} colSpan={5}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Typography variant="subtitle1" gutterBottom component="div">
                      סיכום הביקור:
                      </Typography>
                      <Table size="small">      
                        <TableBody>
                            <TableRow >
                              <TableCell component="th" scope="row"  align="right">
                              {row.comments}
                              </TableCell>
                            </TableRow>                                                               
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
            </TableRow>
           
        </>

    )
}
export default CollapsibleRow;