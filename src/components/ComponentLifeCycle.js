import React from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';

class ComponentLifeCycle extends React.Component{

     constructor(){
         super()
         this.state={
             number:0
         }
     }

     componentDidMount(){
         console.log("Component Did Mount "+this.state.number);   
     }

     incrementValue=()=>{
         this.setState({number:this.state.number+1})
     }

     decrementValue=()=>{
        this.setState({number:this.state.number-1})
    }

    componentDidUpdate(){
        console.log("Component Did Update: "+this.state.number);
        
    }

    switchComponent=()=>{
        this.setState({number:this.state.number ===0 ? 1:0})
    }
 
    render(){
        let component= this.state.number? <Comp1/>:<Comp2/>
        return(
            <div>
                <h1>Component Life Cycle Demo</h1>
                <p>Number is: {this.state.number}</p>
                {component}
                <button type="button" onClick={this.incrementValue}>Increment Value</button>
                <button type="button" onClick={this.decrementValue}>Decrement Value</button>
                <button type="button" onClick={this.switchComponent}>Switch Component</button>
            </div>
        )
     }  
}

export default ComponentLifeCycle