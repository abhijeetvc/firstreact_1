import React from 'react';
import ReactDOM from 'react-dom';
import CheckProps from './CheckProps';
import ConditionalRender from './ConditionalRender';
import MainComponent from './components/MainComponent';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import EventHandling from './EventHandling';
import CallbackEventHandling from './CallbackEventHandling';

 class Demo2 extends React.Component{
   constructor(){
     super()
     this.state={
       firstName:'',
       lastName:''
     }
   }
   onChange=e=>{
      console.log(e.target)
      this.setState({[e.target.name]:e.target.value})
      console.log(this.state.firstName)
   }
  //  onChange1=e=>{
        
  //  }
     render(){
       return(
        <div>
          <h1>This is Heading</h1>
          <input type="text" id="fname" name="firstName" onChange={this.onChange}/>
          <input type="text" name="lastName" onChange={this.onChange}/>
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
      </div>
       )
     }
 }

// function Demo(){
//   const[firstName,setFirstName]=useState('')
//   const[lastName,setLastName]=useState('')

//   const onChange=e=>{
//     console.log(e.target)
//      setFirstName(e.target.value)
//   }

//   const onChange1=e=>{
//     console.log(e.target)
//      setLastName(e.target.value)
//   }

//   return(
//     <div>
//       <h1>This is Heading</h1>
//       <input type="text" id="fname" onChange={onChange}/>
//       <input type="text" onChange={onChange1}/>
//       <p>{firstName}</p>
//       <p>{lastName}</p>

//     </div>
    
//   )
// }

ReactDOM.render(
    <CallbackEventHandling/>
,
  document.getElementById('root')
);

// Virtual DOM --> It is Javascript representation of the actual DOM
