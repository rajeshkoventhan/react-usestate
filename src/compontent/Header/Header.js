//import { useState,} from "react"

//const Header = () =>{
 //const [number,setnumber] = useState(0)

 //const handle =()=>{
  //setnumber (number + 1)  
 //}

 //return(
 //<div className="header">
 //<h1>{number}</h1>
//<button onClick={handle}>click</button>
 //</div>
//)   
//}
//export default Header;

import  { useReducer } from "react";

const Reducer = (state,action)=>{
switch(action.type){
case "INCREMENT":
return{count:state.count+1}   
case "DECREMENT":
return{count:state.count-1}   
default:
    return state
}
}


const DefaulTreduce = ()=>{
 const[result,dispatch] = useReducer(Reducer,{count:0}) 
 
 return(
    <div>
        <p>{result.count}</p>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
        }}>click</button>
            <button onClick={()=>{
            dispatch({type:"DECREMENT"})
        }}>click</button>
    </div>
 )
}

export default DefaulTreduce;
