import { useState } from 'react'
import './App.css'

function Result(props) {
  return(
    <span className={props.className}>{props.children}</span>
  )
}

function App() {
  
  return(
    <main className='container'>

      <section className='first-section'>
        <h3 className='generic-text'>Your Result</h3>
        <div className='circle-result'>
          <Result className='number-result'>76</Result>
          <span className='generic-text'>of 100</span>
        </div>
        <h2 className='status-text'>Great</h2>
        <p className='description-result'>You scored higher than 65% of the people who have taken these test</p>
      </section>

      <section className='sumary-section'>

      </section>
    </main>
  )

}

export default App
