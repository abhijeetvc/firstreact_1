import React from 'react'

class Comp1 extends React.Component{

    componentWillUnmount(){
        console.log("Component One Unmounted");
    }
    
    render(){
        return(
            <div>
                <h1>Component One Loaded</h1>
            </div>
        )
    }
}

export default Comp1