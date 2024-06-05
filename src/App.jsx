import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/Slices/Slice'
import { useEffect, useState } from 'react'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const [color, setColor] = useState('green');
  const [incrementAmount, setIncrementAmount] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (count < 0) {
      setColor('red')
    } else if (count > 0) {
      setColor('green')
    } else {
      setColor('black')
    }
  }, [count]);
  
  return (
    <div className='flex flex-col justify-between items-center border-2 rounded-3xl w-[30vw] h-[40vh] py-[5vh]'>
      <h1 style={{color:color}} className='text-[150px]'>{count}</h1>
      <div className=''>
        <div className='flex items-center gap-3'>
          <button
            className='text text-white bg-green-600 py-2 px-5 rounded-lg font-semibold'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className='text text-white bg-red-600 py-2 px-5 rounded-lg font-semibold'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <div className='flex items-center justify-between gap-3'>
            <input
              type='number'
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(Number(e.target.value))}
              className='text-center w-10 py-2 border rounded-lg outline-none'
            />
            <button
              className='text text-white bg-blue-600 py-2 px-5 rounded-lg font-semibold'
              aria-label="Increment by amount"
              onClick={() => dispatch(incrementByAmount(incrementAmount))}
            >
              Increment by Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
