import React from 'react'
import { connect } from 'react-redux'

class Component3 extends React.Component{
  render(){
    let counter=this.props.counter;
    let text=this.props.text.value;
    return(
      <div id='border'>
        <center>
            <h2><b>Function Component in Component Three</b></h2>
            <h3>Counter :{counter}</h3>&nbsp;<h3></h3>
            <h3>Text :{text}</h3>&nbsp;<h3></h3>
            <br />
        </center>
    </div>
    )
  }
}
 function mapStateToProps(state){
  const counter=state.counter;
  const text=state.text;
  return {
     counter,
     text
  }   
}
export default connect(mapStateToProps)(Component3);