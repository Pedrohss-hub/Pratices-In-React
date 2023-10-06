export default function CardsResult(props) {
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