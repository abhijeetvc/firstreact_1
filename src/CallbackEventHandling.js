import React from 'react'

function CallbackEventHandling(){

    const[message,setMessage]=React.useState('')

    const handleInputChange=(event)=>{
        setMessage(event.target.value)
    }

    return(
        <div>
            <MyInput inputValue={message} inputChange={handleInputChange}/>
            <p>Message : {message}</p>
        </div>
    )
}

function MyInput({message,inputChange}){
    return(
        <div>
            <input type="text" value={message} onChange={inputChange}/>
        </div>
    )
}

export default CallbackEventHandling