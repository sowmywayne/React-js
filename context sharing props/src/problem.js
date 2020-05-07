import React, { useState } from 'react'


const GrandChild = props => {
  return (
    <div>
      <h3>GrandChild: </h3>
      <Child brand={props.brand}/>
    </div>
  )
}

const Child = props => {
  return (
    <div>
      <h1>Child: {props.brand}</h1>
    </div>
  )
}


const App = () => {
  const [brandname] = useState("Amazon")
  return (
    <div>
      <h1>Hello world</h1>
      <GrandChild brand={brandname}/>
    </div>
  )
}


export default App;