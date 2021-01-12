import './LoginComponent.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
//import { StylesProvider, jssPreset } from '@material-ui/core/styles';
 import { ListItem, ListItemText } from '@material-ui/core';
import { StylesProvider, sProvider, jssPreset, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from 'react';
import { Alert } from '@material-ui/lab';

function LoginComponent (props)
{
    const {users, onLogin} = props;
    const [zeutInput, setZeutInput] = useState("");
    const [pwdInput, setPwdInput] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    function checkLogin ()
    {
        const userFound = users.find(user => (zeutInput.toLowerCase() === user.tzeut.toLowerCase() && pwdInput === user.pwd) );
        if(userFound)
        {
            onLogin(userFound);
        }
        else
            setShowWarning(true)

    }

    function inputZeutHandle(e)
    {
        setZeutInput(e.target.value);
        setShowWarning(false);
    }

    function inputPwdHandle(e)
    {
        setPwdInput(e.target.value);
        setShowWarning(false);
    }

    // Configure JSS
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        border: "1px solid blue",
        borderTopRightRadius: "25px",
    },

    right: {
        display: `flex`,
        justifyContent: `space-around`
    }
  }));

    const classes = useStyles(); 

    return (
        <Container className={classes.container} maxWidth="xs">
            <h3>כניסה למטופל</h3>
            <form>
                <Grid container spacing={3} className={classes.right}>
                    <Grid item xs={12}>
                       
                        <Grid container spacing={2}>
                            <Grid item xs={12}  dir="rtl">                   
                            {showWarning ? <Alert variant="outlined" severity="error">  
                                                שם משתמש או סיסמא לא תקינים!
                                            </Alert>: null}

                            </Grid>
                            <StylesProvider jss={jss}>
                                <Grid item xs={12}  dir="rtl">                   
                                    <TextField  fullWidth label="תעודת זהות"  value={zeutInput} name="tzeut" size="small" variant="outlined" onChange={inputZeutHandle} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField  fullWidth label="סיסמא"  value={pwdInput}  name="password" size="small" type="password" variant="outlined" onChange={inputPwdHandle}/>
                                </Grid>
                            </StylesProvider>
                        </Grid>
                    </Grid>

                    <a href="" >
                        <ListItem button>
                        <ListItemText primary="שכחת סיסמא?" />
                        </ListItem>
                    </a>
                    
                    
                    <Grid item xs={12}>
                        <Button color="primary" fullWidth type="button" variant="contained" onClick={checkLogin}>כניסה</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
export default LoginComponent