
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ListItemIcon } from '@material-ui/core';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';


function DigitalServiceComponent (props)
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
        },
        right: {
            textAlign: "right",
          },
        blue: {
            color: "blue",
        },        
    }));

    const classes = useStyles(); 
    return(
        <>
        <Container className={`${classes.container} ${classes.root}` } >
            <h2>השירותים הדיגיטליים</h2>

                <h3  className={classes.right}>
                <ListItemIcon>
                    <BlurCircularIcon className={classes.blue}  fontSize="small"/>
                 </ListItemIcon>
                צפייה בתיק הרפואי</h3>

                <p className={`${classes.right} ${classes.blue}`}>המידע על הביקורים הקודמים ותורים עתידיים </p>


                <h3  className={classes.right}>
                <ListItemIcon>
                    <BlurCircularIcon className={classes.blue}  fontSize="small"/>
                 </ListItemIcon>
                פנייה ישירה לרופא המטפל</h3>

                <p className={`${classes.right} ${classes.blue}`}>הסבר על מצב הרפואי. המלצות אישיות. </p>
                
        </Container>
        </>         
    )

}
export default DigitalServiceComponent
