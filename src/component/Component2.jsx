import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions';


const Component2=props=> {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const [valueChange,setValueChange]=useState("")
  const handleSetText=()=>{
    dispatch(allActions.textAction.set_text(valueChange));
  };
  const handleClearText=()=>{
    dispatch(allActions.textAction.clear_text());
    setValueChange("");
  }

  return (
    <div id='border'>
        <center>
            <h2><b>Function Component in Component Two</b></h2>
            <h3 style={{marginTop:"b-30px"}}>Counter :{counter}</h3><br /><h3>Text:</h3>
            <input type="textarea" onChange={event=>setValueChange(event.target.value)} value={valueChange}></input><br />
            <button onClick={handleSetText} type="submit">Set Redux</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleClearText} type="submit">Clear Reduxs</button>
            <br />
        </center>
    </div>
  )
}
export default Component2;