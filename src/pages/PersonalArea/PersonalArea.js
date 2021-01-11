import "./PersonalArea.css"

function PersonalArea (props)
{

    const {activeUser} = props;
    return(
        <>
           <h1>hi { (activeUser) ? activeUser.fname : ""}</h1>
            <p>Personal Area</p>

        </>
    )
}
export default PersonalArea;