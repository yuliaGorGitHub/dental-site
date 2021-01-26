import { Input, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./CustomSelect.css"

function CustomSelect (props) 
{
    const {arr, selectedItem, idKey, valueKey, handleSelected, all} = props;
    
     let viewSelect = []; 

     if (all !== "")
     {
         //debugger;
        viewSelect.push(    
            <MenuItem value={all}  key={all}
                // {...selectedItem===""} desabled
                // {...selectedItem==={all} ? `{selected}` : ""}>
                // {...selectedItem==={all} ? "" : `{selected}`}>
                {...selectedItem==={all}} selected >
                {all}
            </MenuItem> )
    }


    for(let i = 0; i < arr.length; i++)
    {
        viewSelect.push(         
            <MenuItem value={arr[i][idKey]} key={arr[i][idKey]} 
                {...arr[i][idKey]===selectedItem ? `{selected}` : ""}>
                {arr[i][valueKey]}
            </MenuItem> 
        );
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
          padding: theme.spacing(1),
        //   textAlign: "center",
        textAlign: "right",
          color: theme.palette.text.primary,
        },
        margin: {
          display: 'inline-block',
          margin: '0 50px 0 50px',
        },
  
        select: {
          "& ul": {
              backgroundColor: "#cccccc",
          },
          "& li, & p": {
              fontSize: 12,           
          },        
        },
    }));
  
    const classes = useStyles();


    return (
        <Select
            name="name"
            labelWidth={100}
            autoWidth={false}
            value={selectedItem}
            onChange={event => {handleSelected(event.target.value)}}
            input={<Input id="name"/>}
            labelWidth={100}
            MenuProps={{ classes: { paper: classes.select } }} 
        >
            {viewSelect}
        </Select>     
    )
}
export default CustomSelect;