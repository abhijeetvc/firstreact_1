import React from 'react'

class Comp2 extends React.Component{

    componentWillUnmount(){
        console.log("Component Two Unmounted");
    }
    
    render(){
        return(
            <div>
                <h1>Component Two Loaded</h1>
            </div>
        )
    }
}

export default Comp2