import React, { useEffect } from 'react';
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  title: {
    marginTop: '20px !important',
    marginBottom: '20px !important'
  }
})



function App() {
  const classes = useStyles()

  return (
    <Container>
      <Typography variant='h2' color='secondary' align='center' className={classes.title} >
        COVID-19
      </Typography >
      <Cards />
      <CountryPicker />
      <Chart />
    </Container>
  );
}

export default App;
