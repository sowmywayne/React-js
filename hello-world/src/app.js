import React from 'react'
import './styles.css'
import Button from './button'

const App = () => {
  return(
    <div>
      <h1 style={{textAlign:'center'}}>Hello world</h1>
      <Button title="App Store"/>
      <Button title="Play Store"/>
      {/* <button className='button'>App store</button>
      <button className='button'>Play store</button> */}
    </div>
  )

}

export default App;