import MyProps from "./MyProps";

function CheckProps(){
    const message="Good afternoon"
    return(
        <div>
           <h1>Heading</h1>
           <MyProps message={message}/>
        </div>
    )
}

export default CheckProps