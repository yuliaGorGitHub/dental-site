import './RedirectComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ListItem, ListItemText } from '@material-ui/core';
import { jssPreset } from "@material-ui/core/styles";
import { create } from 'jss';
import rtl from 'jss-rtl';

function RedirectComponent (props)
{

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 500,
            [theme.breakpoints.down("md")] : {
                maxWidth: 350
            },
            [theme.breakpoints.down("sm")] : {
                maxWidth: 200
            }
          },        
        container: {
            padding: theme.spacing(3),
            border: "1px solid blue",
            borderTopLeftRadius: "25px",
        },

        right: {
            display: `flex`,
            justifyContent: `space-around`
        }
  }));

      // Configure JSS
      const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    const classes = useStyles(); 
    return(
        <>
        <Container className={`${classes.container} ${classes.root}`} >
            <h3>שירותי האתר</h3>


            <a href={ `#/appointments/Geb4GTbjAg` } >
                <ListItem button>
                <ListItemText primary="זימון תור לבדיקת רופא שיניים" />
                </ListItem>
             </a>

             <a href={ `#/appointments/5lRmREiFH3`} >
                <ListItem button>
                <ListItemText primary="זימון תור לבדיקה ליישור שיניים" />
                </ListItem>
             </a>    
             <a  href={ `#/appointments/S5Z6hBmEka`} >
                <ListItem button>
                <ListItemText primary="זימון תור לשיננית" />
                </ListItem>
             </a>                      
                
        </Container>
        </>         
    )

}
export default RedirectComponent
