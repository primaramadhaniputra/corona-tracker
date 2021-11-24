import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import CountUp from 'react-countup';
import { useGlobalContext } from '../../context';

const useStyles = makeStyles({
   title: {
      fontWeight: 'bold !important'
   },

   infected: {
      borderBottom: '10px solid blue'
   },
   Recovered: {
      borderBottom: '10px solid green'
   },
   death: {
      borderBottom: '10px solid red'
   },

})

function Cards() {
   const { confirmed, recovered, deaths } = useGlobalContext()
   const classes = useStyles()

   if (!confirmed) {
      return (
         <Typography align='center' variant='h3'>Loading...</Typography>
      )
   }

   return (
      <Grid container justifyContent='center' spacing={3}>
         <Grid item xs={12} md={3}>
            <Card elevation={3} className={classes.infected}>
               <CardContent >
                  <Typography className={classes.title} variant='subtitle1' gutterBottom color='info' >
                     Infected
                  </Typography>
                  <Typography variant='h5' color='primary'>
                     <CountUp
                        start={0}
                        decimal=","
                        end={confirmed.value}
                        duration={10}
                        decimals={3}
                     />
                  </Typography>
                  <Typography variant='info' color='info' >
                     wed apr 01 2020
                  </Typography>
                  <Typography variant='subtitle2' color='info' >
                     Number of active cases of covid-19
                  </Typography>
               </CardContent>
            </Card>
         </Grid>
         <Grid item xs={12} md={3}>
            <Card elevation={3} className={classes.Recovered}>
               <CardContent >
                  <Typography className={classes.title} variant='subtitle1' gutterBottom color='info'>
                     Recovered
                  </Typography>
                  <Typography variant='h5' color='primary'>
                     <CountUp
                        start={0}
                        decimal=","
                        end={recovered.value}
                        duration={10}
                        decimals={3}
                     />
                  </Typography>
                  <Typography variant='info' color='info' >
                     wed apr 01 2020
                  </Typography>
                  <Typography variant='subtitle2' color='info' >
                     Number of active cases of covid-19
                  </Typography>
               </CardContent>
            </Card>
         </Grid>
         <Grid item xs={12} md={3}>
            <Card elevation={3} className={classes.death}>
               <CardContent >
                  <Typography className={classes.title} variant='subtitle1' gutterBottom color='info'>
                     Deaths
                  </Typography>
                  <Typography variant='h5' color='primary'>
                     <CountUp
                        start={0}
                        decimal=","
                        end={deaths.value}
                        duration={10}
                        decimals={3}
                     />
                  </Typography>
                  <Typography variant='info' color='info' >
                     wed apr 01 2020
                  </Typography>
                  <Typography variant='subtitle2' color='info' >
                     Number of active cases of covid-19
                  </Typography>
               </CardContent>
            </Card>
         </Grid>

      </Grid>
   )
}

export default Cards
