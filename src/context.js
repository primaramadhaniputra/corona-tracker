import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext()



const AppProvider = ({ children }) => {
   const [covid, setCovid] = useState([])
   const [place, setPlace] = useState([])
   const [nameCountry, setNameCountry] = useState([])


   useEffect(() => {
      async function fetchData() {
         const data = await fetch(`https://covid19.mathdro.id/api`)
         const response = await data.json()
         setCovid(response)
      }

      fetchData()
      fetchCountryName()
   }, [])


   const fetchCountryName = async () => {
      const data = await fetch(`https://covid19.mathdro.id/api/countries`)
      const response = await data.json()
      setNameCountry(response.countries)

   }

   const fetchCountry = async (name) => {
      const data = await fetch(`https://covid19.mathdro.id/api/countries/${name}`)
      const response = await data.json()
      setPlace(response)

   }

   return <AppContext.Provider value={{
      ...covid, place, fetchCountry, nameCountry
   }}>
      {children}
   </AppContext.Provider>
}

const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppProvider, useGlobalContext }