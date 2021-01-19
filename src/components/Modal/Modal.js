
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles(theme => ({
    modal: {
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Modal( { handleClose, show, children }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <div>

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

                    <Button variant="contained" color="primary" onClick={handleClose}>
                      Close
                    </Button>                    
                </div>

            </ dialog>

        </div>
    );
}
