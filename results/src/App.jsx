import { useState } from 'react'
import './App.css'

function Result(props) {
  return(
    <span className={props.className}>{props.children}</span>
  )
}

function CardsResult(props) {
  console.log(props.type)
  return (
    <div className={`cards ${props.className}`}>
      <div className='name-card'>
        {props.type}
      </div>
      <div className='number-card'>
        {props.children} <p className='number-100'> / 100</p>
      </div>
    </div>
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
        <span className='text-sumary'>Summary</span>
          <div className="cards-sumary">
            <CardsResult className="reaction" type="Reaction">80</CardsResult>
            <CardsResult className="memory" type="Memory">92</CardsResult>
            <CardsResult className="verbal" type="Verbal">61</CardsResult>
            <CardsResult className="visual" type="Visual">72</CardsResult>
          </div>
        <button className='btn-sumary'>Try Again</button>
      </section>

    </main>
  )

}

export default App
