import React from 'react';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import LocationMap from './components/LocationMap/LocationMap';
import LocationList from './components/LocationList/LocationList';

function App() {
  return (
    <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width:  '100%'}}>
            <Grid item xs={12} md={4}>
                <LocationList />
            </Grid>
            <Grid item xs={12} md={8}>
                <LocationMap />
            </Grid>
        </Grid>
    </>
  );
}

export default App;
