import React from 'react'
import allActions from '../actions';
import {useSelector,useDispatch} from 'react-redux'

const Component1=props=>{
  const counter=useSelector(state=>state.counter);
  const text=useSelector(state=>state.text.value);
  const dispatch=useDispatch();
  return (
    <div id='border'>
        <center>
            <h2><b>Function Component in Component One</b></h2>
            <h3>Counter :{counter}</h3>&nbsp;
            <h3>text :{text}</h3> 
            <button onClick={()=>dispatch(allActions.counterAction.increment())}>
              Increase Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>dispatch(allActions.counterAction.decrement())}>
               Decrease Counter</button> 
            
        </center>
    </div>
  )
}
export default  Component1;