import React, { useContext, useEffect, useState } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import { WeatherContext } from '../../context/WeatherContext'

export default function SearchBox() {

    const PreviousQuery = localStorage.getItem('city')

    const [query,setQuery] = useState(PreviousQuery ? PreviousQuery : '')
    const {handleToday} = useContext(WeatherContext)
    const {handleForecast} = useContext(ForecastContext)

    useEffect(()=>{
        if(PreviousQuery){
            handleToday(PreviousQuery)
            handleForecast(query)
            setQuery('')
        }
    },[])

    function handleChange(e){
        setQuery(e.target.value)
        if(e.code === 'Enter'){
            handleToday(query)
            handleForecast(query)
            localStorage.setItem('city',query)
            setQuery('')
        }
    }
  return (
    <input className="search" type="text" onKeyUp={(e) => handleChange(e)}/>
  )
}
