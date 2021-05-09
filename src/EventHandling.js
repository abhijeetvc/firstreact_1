import {useState} from 'react'

function EventHandling(){

    const[count,setCount]=useState(0)
    const[message,setMessage]=useState('')

    // const handleCount=()=>{
    //     setCount(count+1)
    // }

     const handleCount=(value)=>{
         setCount(count+value)
     }

    const handleClick=()=>{
        console.log("Button clicked...");
    }

    const readMessage=(event)=>{
        console.log(event.target.value);
        
        setMessage(event.target.value)
    }
    return(
        <div>
            <p>Count is: {count}</p>
            <button type="button" onClick={handleClick}>Check Event</button>
            <button type="button" onClick={()=>{
                 setCount(count+1)
            }}>Check Count</button>
            <input type="text" onChange={readMessage} name="firstName"/>
            <p> Message: {message}</p>

            <button type="button" onClick={()=>handleCount(1)}>Increment</button>
            <button type="button" onClick={()=>handleCount(-1)}>Decrement</button>

        </div>
    )
}

export default EventHandling