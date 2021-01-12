import { AppBar, Container, HomeIcon, Button, IconButton, Toolbar, List, ListItem, ListItemText } from "@material-ui/core"
import { Home,  AccessAlarm, ThreeDRotation } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"


function DentalNavBar(props) {
    const {activeUser, onLogout, users} = props; 


    const useStyles = makeStyles({
        navbarDisplayFlex: { 
            display: `flex`,
            justifyContent: `space-between`
        },
        navDisplayFlex: { 
            display: `flex`,
            justifyContent: `flex-end`
        },
        linkText: {
          textDecoration: `none`,
          textTransform: `uppercase`,
          color: `white`,
        }
     });
  
    let navLinks = [

        { title: `צור קשר `, path: `#/`},
        { title: `הצוות הרפואי שלנו`, path: `#/`}
      
    ]

    if (activeUser)
    {
        if(activeUser.isDoctor)
        {
            navLinks = navLinks.concat(
                { title: `איזור עבודה`, path: `#/work` } );
        }
        else
        {
            navLinks = navLinks.concat(
                { title: `איזור אישי`, path: `#/personal`} );
        }
    }

    const classes = useStyles(); 
  
    return (
         <AppBar>
            <Toolbar>
                <Container  maxWidth="md" className={classes.navbarDisplayFlex}>
                < IconButton edge="start"   color="inherit"   aria-label="home"  href="#/"  dir="rtl">
                    <Home fontSize="small" />
                </IconButton >
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} edge="end" >
                    {navLinks.map(({ title, path, onClick }) => (
                    <a href={path} key={title} className={classes.linkText} >
                        <ListItem button>
                        <ListItemText primary={title} />
                        </ListItem>
                    </a>
                    ))}
                    {activeUser ? 
                    <a href="#/" className={classes.linkText} onClick={onLogout}>
                        <ListItem button>
                        <ListItemText primary="התנתק" />
                        </ListItem> 
                    </a>  
                    : null}
                </List>
                </Container>
            </Toolbar>
         </AppBar>
        )
}
export default DentalNavBar