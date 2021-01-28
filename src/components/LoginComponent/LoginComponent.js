import './LoginComponent.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { ListItem, ListItemText } from '@material-ui/core';
import { StylesProvider, sProvider, jssPreset, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import Parse from 'parse';
import User from '../../data/User';

function LoginComponent (props)
{
    const { activeUser, onLogin} = props;
    const [zeutInput, setZeutInput] = useState("");
    const [pwdInput, setPwdInput] = useState("");
    const [showWarning, setShowWarning] = useState(false);


    function checkLogin()
    {
       Parse.User.logIn( zeutInput, pwdInput).then((loguser) => {

        if(loguser.get('jobId') != null)
        {
            const job = Parse.Object.extend('job');
            const query = new Parse.Query(job);

            query.get(loguser.get('jobId').id).then(res=>{
               // successful login for worker
               onLogin(new User(loguser, res.get("jobHebrew")));
            })
            .catch(error=>
            {
                console.log(error);
            })
        }

        else
        {
            // successful login for pacient
            onLogin(new User(loguser, ""));
        }

        }).catch(error => {
            console.error('Error while logging in user', error);
            setShowWarning(true)
        })
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
        root: {
            maxWidth: 350,
            [theme.breakpoints.down("md")] : {
                maxWidth: 280
            },
            [theme.breakpoints.down("sm")] : {
                maxWidth: 200
            }
          },        
        container: {
            padding: theme.spacing(3),
            border: "1px solid blue",
            borderTopRightRadius: "25px",
        },

  }));

    const classes = useStyles(); 

    return (
        <Container className={`${classes.container} ${classes.root}`} >
            <h2>כניסה למטופל</h2>
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