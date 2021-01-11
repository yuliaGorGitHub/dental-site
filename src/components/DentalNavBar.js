import { AppBar, IconButton, Toolbar, List, ListItem, ListItemText } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"


function DentalNavBar() {

    const useStyles = makeStyles({
        navDisplayFlex: {
          display: `flex`,
          justifyContent: `space-between`
        },
        linkText: {
          textDecoration: `none`,
          textTransform: `uppercase`,
          color: `white`,
          backgroundColor: 'blue'
        }
     });
  
     const navLinks = [
        { title: `איזור אישי`, path: `#/personal` },
        { title: `צור קשר `, path: `#/personal` },
        { title: `הצוות הרפואי שלנו`, path: `#/personal` },
        { title: `איזור עבודה`, path: `#/work` },
        ]
    
    
        const classes = useStyles(); 
         
return (
    <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home"  href="#/">
            <Home fontSize="large" />
        </IconButton>
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
            {navLinks.map(({ title, path }) => (
            <a href={path} key={title} className={classes.linkText} >
                <ListItem button>
                <ListItemText primary={title} />
                </ListItem>
            </a>
            ))}
        </List>
    </Toolbar>
    )
}
export default DentalNavBar