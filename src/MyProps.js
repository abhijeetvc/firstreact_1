import React,{Component} from 'react'

// function MyProps(props){
//     return(
//         <div>
//            <p>Paragraph {props.message}</p>
//         </div>
//     )
// }


class MyProps extends Component{
    render(){
        return(
            <div>
                <p>Content: {this.props.message}</p>
            </div>
        )
    }
}

export default MyProps