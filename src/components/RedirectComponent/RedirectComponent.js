import './RedirectComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
 import ReplyIcon from '@material-ui/icons/Reply';


function RedirectComponent (props)
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
            border: "1px solid blue",
            borderTopLeftRadius: "25px",
            height: "75%",
        },
        right: {
            textAlign: "right",
          },
        icon: {
            color: "blue",
        },        
    }));

    const classes = useStyles(); 
    return(
        <>
        <Container className={`${classes.container} ${classes.root}` } >
            <h2>שירותי האתר</h2>


            <a href={ `#/appointments/Geb4GTbjAg` } >
                <ListItem button className={`${classes.right}`}>
                <ListItemIcon>
                    <ReplyIcon className={classes.icon}  fontSize="small"/>
                 </ListItemIcon>
                <ListItemText primary="זימון תור לבדיקת רופא שיניים" />
                </ListItem>
             </a>

             <a href={ `#/appointments/5lRmREiFH3`} >

                <ListItem button className={classes.right}>
                <ListItemIcon>
                    <ReplyIcon className={classes.icon}  fontSize="small"/>
                 </ListItemIcon>
                <ListItemText primary="זימון תור לבדיקה ליישור שיניים" />
                </ListItem>
             </a>    
             <a  href={ `#/appointments/S5Z6hBmEka`} >
                <ListItem button  className={classes.right}>
                <ListItemIcon>
                    <ReplyIcon className={classes.icon}  fontSize="small"/>
                 </ListItemIcon>
                <ListItemText primary="זימון תור לשיננית" />
                </ListItem>
             </a>                      
                
        </Container>
        </>         
    )

}
export default RedirectComponent
