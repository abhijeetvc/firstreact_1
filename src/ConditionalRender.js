
 const users=[
      {
      id:1,firstName:"John",lastName:"Doe"
  },{
      id:2,firstName:"Peter",lastName:"Parker"
  },
  {
      id:3,firstName:"Richard",lastName:"Doe"
  }
]

function ConditionalRender(){

    return(
        <div>
            <h1>ConditionalRender Demo</h1>
            <MyList list={users}/>
        </div>
    )
}

  // condition ? a:b

// function MyList({list}){
//     if(!list.length){
//         return(
//             <div>
//                <h2>Data Not Available!!!</h2>
//             </div>
//         )
//     }else{
//         return(
//             <div>
//                {list.map(item=>(
//                 <Item item={item}/>
//               ))}
//             </div>
                    
//         )
//     }
    
// }

function MyList({list}){
     return !list.length ? <div>
           <h2>Data not found</h2>
     </div>:(
            <div>
               {list.map(item=>(
                <Item item={item}/>
              ))}
            </div>              
        )   
}

function Item({item}){
    return(
        <li>
            {item.firstName} {item.lastName}
        </li>
    )
}

export default ConditionalRender