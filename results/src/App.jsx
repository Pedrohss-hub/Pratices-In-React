import { useState } from 'react'
import './App.css'

function Result(props) {
  return(
    <span className={props.className}>{props.children}</span>
  )
}

function CardsResult(props) {
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
  
  const [value, setValue] = useState([])
  function ChangeValues() {
    let randomValue = []
    randomValue.push(parseInt(Math.random() * (100 - 1) + 1))
    let i = 0
    while( i < 4) {
      let testNumber = parseInt(Math.random() * (100 - 1) + 1)
      if(testNumber < randomValue[0]){
        randomValue.push(testNumber)
        i += 1
      } 
    }

    setValue(randomValue)
  }
  
  return(
    <main className='container'>

      <section className='first-section'>
        <h3 className='generic-text'>Your Result</h3>
        <div className='circle-result'>
          <Result className='number-result'>{value[0]}</Result>
          <span className='generic-text'>of 100</span>
        </div>
        <h2 className='status-text'>Great</h2>
        <p className='description-result'>You scored higher than 65% of the people who have taken these test</p>
      </section>

      <section className='sumary-section'>
        <span className='text-sumary'>Summary</span>
          <div className="cards-sumary">
            <CardsResult className="reaction" type="Reaction">{value[1]}</CardsResult>
            <CardsResult className="memory" type="Memory">{value[2]}</CardsResult>
            <CardsResult className="verbal" type="Verbal">{value[3]}</CardsResult>
            <CardsResult className="visual" type="Visual">{value[4]}</CardsResult>
          </div>
          <button onClick={() => ChangeValues()} className='btn-sumary'>Try Again</button>
      </section>
    
    </main>
  )

}

export default App
