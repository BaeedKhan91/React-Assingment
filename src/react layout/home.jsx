import React from 'react'
import Nav from './nav'
import Reactpi from "./../assets/react.svg"
function home() {
  return (
    <>
    <Nav/>
    <h1 style={{
        marginTop:"100px"
    }}>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex itaque culpa odio quas pariatur nesciunt necessitatibus nobis nulla earum expedita voluptates tempore unde sint repellendus aperiam velit odit atque, temporibus ab eveniet. Voluptatem vitae quo sunt neque illum dolor. Eos autem nulla hic ullam tempore commodi cumque atque sequi dolores, dicta fuga tempora ab amet vel quia architecto ad esse rem dolorum porro officiis beatae qui? Enim, fugiat velit eveniet unde distinctio corporis accusamus cum rerum labore nesciunt, assumenda excepturi, eos ducimus natus eum nulla! Rem nulla, veniam porro accusantium fugit commodi vero dolorum doloremque delectus quos reprehenderit, non tempora odit repellendus ullam voluptatem laboriosam expedita quibusdam accusamus totam. Cum nesciunt eaque alias harum nobis illo consequuntur ab vitae accusamus expedita, distinctio labore omnis hic molestias! Qui praesentium nam officiis odio reiciendis, sapiente, modi ut perspiciatis ipsa consequatur at? Expedita in et optio odio labore aliquid mollitia officia eaque quam!</p>
    <img src={Reactpi} alt="" style={{
        width:"300px",
        height:"300px",
        placeItems:"center",
        marginLeft:"30%",
        marginTop:"10%"
    }} />
    </>
  )
}

export default home