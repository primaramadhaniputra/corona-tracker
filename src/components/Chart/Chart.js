import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { useGlobalContext } from '../../context';
const useStyles = makeStyles({
   cart: {
      marginTop: 20
   },
   listCart: {
      width: '100%'
   }
})




function Chart() {
   const classes = useStyles()
   const { place } = useGlobalContext()
   const [dailyData, setDayliData] = useState([])

   const fetchDayli = async () => {
      const data = await fetch(`https://covid19.mathdro.id/api/daily`)
      const response = await data.json()

      setDayliData(response)
   }


   useEffect(() => {
      fetchDayli()
   }, [])

   if (!dailyData) {
      return null
   }


   const barcart = () => {
      if (place.confirmed) {
         const barChart = (
            <Bar
               data={{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                     {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [place.confirmed.value, place.recovered.value, place.deaths.value],
                     },
                  ],
               }}
               options={{
                  legend: { display: false },
                  title: { display: true, text: `Current state in` },
               }}
            />
         )
         return barChart
      }
   }




   const lineChart = (
      <Line
         data={{
            labels: dailyData.map(({ reportDate }) => new Date(reportDate).toLocaleDateString()),
            datasets: [{
               data: dailyData.map((data) => data.confirmed.china),
               label: 'Infected',
               borderColor: '#3333ff',
               fill: true,
            }, {
               data: dailyData.map((data) => data.deaths.china),
               label: 'Deaths',
               borderColor: 'red',
               backgroundColor: 'rgba(255, 0, 0, 0.5)',
               fill: true,
            }, {
               data: dailyData.map((data) => data.recovered.china),
               label: 'Recovered',
               borderColor: 'green',
               backgroundColor: 'rgba(0, 255, 0, 0.5)',
               fill: true,
            },
            ],
         }}
      />
   )

   return (
      <Grid container justifyContent='center' className={classes.cart}>
         <Grid item className={classes.listCart}>
            {place.confirmed ? barcart() : lineChart}
         </Grid>
      </Grid>
   )
}

export default Chart
