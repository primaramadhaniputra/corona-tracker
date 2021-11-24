import { FormControl, Grid, NativeSelect } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useGlobalContext } from '../../context'
const useStyles = makeStyles({
   country: {
      marginTop: 20
   }
})

function CountryPicker() {
   const { nameCountry, fetchCountry } = useGlobalContext()
   const classes = useStyles()

   return (
      <Grid container justifyContent='center' className={classes.country}>
         <FormControl >
            <NativeSelect onChange={(e) => fetchCountry(e.target.value)}>
               <option value="">China</option>

               {nameCountry.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
            </NativeSelect>
         </FormControl>
      </Grid>
   )
}

export default CountryPicker
