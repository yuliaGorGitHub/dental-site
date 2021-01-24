import "./Modal.css"
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}



function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

// const theme = createMuiTheme({
//     direction: 'rtl',
//   });

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "right",
    },
    space: {
        display: `flex`,
        justifyContent: `space-around`,
        paddingTop: 20,
        paddingBottom: 20, 
    },



    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    //style for font size
    resize:{
        fontSize: 12,
        textAlign: "right"
    },    
}));

export default function Modal( { handleClose, handleComment, show, children }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const [summary , setSummary] = useState("");

    function closeModal() {
        setSummary("");
        handleClose();
    }
    
    function handleAddComment() {
        handleComment(summary);
        closeModal();
    }

    return (
        <div  dir="rtl">
            <dialog 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={show}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Simple React Modal</h2>
                    <p>
                       {children}
                    </p>

                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField  className={classes.resize} 
                            label="סיכום"
                            variant="filled"
                            fullWidth={true}
                            rowsMax="4"
                            //variant="outlined" 
                            multiline={true}
                            rows={4}
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                          textAlign="right"
                            value = {summary}
                            onChange={e => setSummary(e.target.value)} 
                        />

                    </form>
                    <div className={classes.space}>
                    <Button  variant="contained"  color="primary" onClick={closeModal} m="2rem">
                      Close
                    </Button>           

                    <Button variant="contained" color="primary" onClick={handleAddComment}>
                      Save
                    </Button> 
                    </div>                                 
                </div>

            </ dialog>

        </div>
    );
}
