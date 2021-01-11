import "./WorkArea.css"

function WorkArea (props)
{
    const {activeUser} = props;

    return(
        <>
            <h1>hi { (activeUser) ? activeUser.fname : ""}</h1>
            <p>Work Area</p>
        </>
    )
}
export default WorkArea;