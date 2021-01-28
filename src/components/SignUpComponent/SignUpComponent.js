
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListItem, ListItemText } from '@material-ui/core';

function SignUpComponent (props)
{

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
            marginTop: "80px",
            border: "1px solid blue",
            borderTopRightRadius: "25px",
        },

        right: {
            textAlign: "right",
        }
  }));


    const classes = useStyles(); 
    return(
        <>
        <Container className={`${classes.container} ${classes.root}`} >
            <h2>עדיין לא מטופל שלנו?</h2>
            <h4 className={classes.right}>לפרטים על רישום אונליין כנסו</h4>

             <a href={ `#/appointments/5lRmREiFH3`} >
                <ListItem button className={classes.right}>
                <ListItemText primary="להרשמה >" />
                </ListItem>
             </a>    

        </Container>
        </>         
    )

}
export default SignUpComponent;
