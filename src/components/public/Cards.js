import React from 'react'
import { Card } from './Card'

export const Cards = (props) => {
//  export const Cards = ({dogs}) => {
  //console.log(this.dogs)
  console.log("veremos"+JSON.stringify.props)
  //const CardsList=dogs.map((m)=><Card />)
  
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
  )
}

