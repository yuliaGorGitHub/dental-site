import './AppointmentsTable.css';
import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';  
import Paper from '@material-ui/core/Paper';  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TablePagination from '@material-ui/core/TablePagination';  
import TableRow from '@material-ui/core/TableRow';  
//import axios from 'axios';    
import { useState, useEffect } from 'react'  
import { IconButton } from "@material-ui/core";
import HowToRegIcon from '@material-ui/icons/HowToReg';

function AppointmentsTable (props)
{
    const {appointments} = props;

     const [page, setPage] = React.useState(0);  
    
    
    const [rowsPerPage, setRowsPerPage] = React.useState(5);  
    const [selectedRow, setselectedRow] = React.useState(null);  
 

    const handleChangePage = (event, newPage) => {  
    setPage(newPage);  
    };  

    const handleChangeRowsPerPage = event => {  
    setRowsPerPage(+event.target.value);  
    setPage(0);  
    };  

    const useStyles = makeStyles({  
        root: {  
          width: '90%',
          margin: '0 auto',  
        },  
        container: {  
          maxHeight: 440,  
        },  
        padding:    {
            paddingTop: 2,
            paddingBottom: 2,
        },
        hover: {
            "&:hover": {
              backgroundColor: "#D4F1F4"
            }
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

     function editItem()
     {
         alert(1);
         //selectedRow();
     }

    return(
              <Paper className={classes.root}>  
                <TableContainer className={classes.container}>  
                    <Table stickyHeader aria-label="sticky table">  
                    <TableHead>  
                        <TableRow >  
                            <TableCell className={classes.padding} align="right">תאריך</TableCell>  
                            <TableCell className={classes.padding} align="right">יום</TableCell>  
                            <TableCell className={classes.padding} align="right">שעה</TableCell>  
                            <TableCell className={classes.padding} align="right">רופא</TableCell>  
                            <TableCell className={classes.padding} align="right">תאום תור</TableCell>  
                        </TableRow>  
                    </TableHead>  
                    <TableBody >  
                        {appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  
                            return (  
                            <TableRow  key={row.id} className={classes.hover} >  
                                <TableCell   className={classes.padding} align="right">{row.appDate}</TableCell>  
                                <TableCell   className={classes.padding} align="right">{row.appWeekDay}</TableCell>  
                                <TableCell   className={classes.padding} align="right">{row.appStartTime}</TableCell>  
                                <TableCell   className={classes.padding} align="right">{row.doctorId}</TableCell>                                 
                                <TableCell   className={classes.padding} align="right">
                                    <IconButton edge="start" value={row.id}   color="inherit"  aria-label="create" dir="rtl" className={classes.padding}
                                        onClick={editItem}>
                                    <HowToRegIcon fontSize="small" color="primary"/>
                                </IconButton >                                    
                                </TableCell>  
                            </TableRow>  
                            );  
                        })}  
                    </TableBody>  
                    </Table>  
                </TableContainer>  
                <TablePagination  
                // className={classes.footer}
                height={30}
                minHeight={30}
                    labelRowsPerPage='שורות בדף:'
                    rowsPerPageOptions={[5, 10, 15]}  
                    component="div"  
                    count={appointments.length}  
                    rowsPerPage={rowsPerPage}  
                    page={page}  
                    SelectProps={{
                        native: true,
                      }}
                    onChangePage={handleChangePage}  
                    onChangeRowsPerPage={handleChangeRowsPerPage}  
                />  
            </Paper>  
    )
}
export default AppointmentsTable;