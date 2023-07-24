import React from 'react';
import Component1 from '../component/Component1';
import Component2 from '../component/Component2';
import {Grid } from '@mui/material';
import './App.css';
import Component3 from '../component/Component3';

function App() {
  return (
    //  <React.Fragment>
    //     <Component1/>
    //     <Component2/>
    //     <Component3/>
    //  </React.Fragment>
 <React.Fragment><center>
  <h1>React Redux Sample App</h1>
  <Grid container>
    <Grid item xs={6}>
         <Component1></Component1>
    </Grid>
    <Grid item xs={6}>
         <Component2></Component2>
    </Grid>
    <Grid item xs={6}>
         <Component3></Component3>
    </Grid>
  </Grid>
  </center>
 </React.Fragment>
  );
}

export default App;
