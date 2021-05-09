import Component1 from "./Component1";
import Component2 from "./Component2";


function MainComponent(){
    const choice='c3'

    function CheckSwitch(props){
        switch(props.value){
            case 'c1':
                return(<Component1/>)
            case 'c2':
                return(<Component2/>)
            default:
                return <h1>Invalid choice...</h1>         
        }
    }
    return(
        <div>
            <h1>Switch Implementation</h1>
            <CheckSwitch value={choice}/>
        </div>
    )
}

export default MainComponent