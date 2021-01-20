import './AppointmentsTable.css';
import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';  
import Paper from '@material-ui/core/Paper';  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
 import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
//import axios from 'axios';    
import { useState, useEffect } from 'react'  
import CollapsibleRow from '../CollapsibleRow/CollapsibleRow';
import CustomMaterialPagination from '../CustomMaterialPagination';
import { DepartureBoardOutlined } from '@material-ui/icons';

function AppointmentsTable (props)
{
    const {appointments,fromScreen, returnToList, setShowModal, setSelectedRow} = props;

    const [page, setPage] = React.useState(0);  
    const [rowsPerPage, setRowsPerPage] = React.useState(3);  
     // const [data, setData] = useState([]);   

    const handleChangePage = newPage => {  
      setPage(newPage);  
    };  

    const handleChangeRowsPerPage = num => {  
      setRowsPerPage(num);
      setPage(0);  
    };  

    const colLbl = (fromScreen === "appoint") ?  "תאום תור" : (  (fromScreen === "pActive") ?  "ביטול תור"  : ( fromScreen === "pHistory" ? "צפייה בפרטים"  : "שם המטופל" ) );

    const useStyles = makeStyles({  
      root: {  
        width: '90%',
        margin: '0 auto', 
                            
      },  
      container: {  
        maxHeight: 440, 
          
      },         
      padding:    {
          paddingTop: 0,
          paddingBottom: 0,
      },
      right: {
          diraction: "ltr", 
          textAlign: "right",
          align: "right"
      },    
      footer: {
          "& > td > div": {
              height: 30,
              minHeight: 30
          },
          background: 'linear-gradient(45deg, #D3F7EE 30%, #E4DFD9 90%)',
      }
    }); 

   const classes = useStyles();

   return(
        <Paper className={classes.root}>  
          <TableContainer className={classes.container}>  
              <Table  aria-label="sticky table">  
                <TableHead>  
                  <TableRow  className={classes.header}>  
                      <TableCell className={classes.padding} align="right">תאריך</TableCell>  
                      <TableCell className={classes.padding} align="right">יום</TableCell>  
                      <TableCell className={classes.padding} align="right">שעה</TableCell>  
                      <TableCell className={classes.padding} align="right">רופא</TableCell>  
                      <TableCell className={classes.padding} align="right">{colLbl}</TableCell>  
                  </TableRow>  
                </TableHead>  
              <TableBody>  
                  {appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {  
                      return (  
                        <CollapsibleRow fromScreen={fromScreen} returnToList={returnToList} row={row} index={index} setShowModal={setShowModal}  setSelectedRow={setSelectedRow}/>
                      );  
                  })}  
              </TableBody>  
              </Table>  
          </TableContainer>  

          <CustomMaterialPagination rowCount={appointments.length} rowsPerPage={rowsPerPage} currentPage={page} 
                onChangePage={handleChangePage}  onChangeRowsPerPage={handleChangeRowsPerPage}/>
        </Paper>  
    )
}
export default AppointmentsTable;