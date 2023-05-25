import React from 'react'

export const City = ({city}) => {
  return (
    <div>
    <div className="w-[350px] rounded-md shadow mx-auto pb-4 pt-6 bg-gray-100" >
      <h1 className="text-5xl font-bold">{city.main.temp} °C</h1>
      <h1 className="text-3xl font-semibold">{city.name}</h1>
      <h1 className="text-2xl">{city.weather[0].main}</h1>
    </div>
  </div>
  )
}
