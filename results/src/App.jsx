import { useState } from 'react'
import './App.css'
import CardsResult from './components/CardsResult'
import Result from './components/Result'
import { useSpring, animated } from '@react-spring/web'

function App() {

  //Behavior of changing values
  const [value, setValue] = useState([])
  let isButton = true

  function ChangeValues() {
    if(isButton) {
      let randomValue = []
      randomValue.push(parseInt(Math.random() * (100 - 1) + 1))
      let i = 0
      while( i < 4) {
        let valueCards = parseInt(Math.random() * (100 - 1) + 1)
        if(valueCards < randomValue[0]){
          randomValue.push(valueCards)
          i += 1
        } 
      }
      setValue(randomValue)
    }
      return value
  }
  
  //Animation of changing numbers
  function AppendValue (props) {
    const { number } = useSpring({
      to: async (next) => {
        isButton = false
        await next({number: props.children})
        isButton = true
      },
      from: {number: 0},
    })
    return(
      <animated.span>
        {number.to((val) => Math.round(val))}
      </animated.span>
    )
  }

  return(
    <main className='container'>
      <section className='first-section'>
        <h3 className='generic-text'>Your Result</h3>
        <div className='circle-result'>
          <Result className='number-result'><AppendValue>{value[0] || 76 }</AppendValue></Result>
          <span className='generic-text'>of 100</span>
        </div>
        <h2 className='status-text'>Great</h2>
        <p className='description-result'>You scored higher than 65% of the people who have taken these test</p>
      </section>

      <section className='sumary-section'>
        <span className='text-sumary'>Summary</span>
          <div className="cards-sumary">
            <CardsResult className="reaction" type="Reaction"><AppendValue>{value[1] || 80 }</AppendValue></CardsResult>
            <CardsResult className="memory" type="Memory"><AppendValue>{value[2] || 92 }</AppendValue></CardsResult>
            <CardsResult className="verbal" type="Verbal"><AppendValue>{value[3] || 61 }</AppendValue></CardsResult>
            <CardsResult className="visual" type="Visual"><AppendValue>{value[4] || 72 }</AppendValue></CardsResult>
          </div>
          <button onClick={() => ChangeValues()} className='btn-sumary'>Try Again</button>
      </section>
    
    </main>
  )

}

export default App
