import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/Slices/Slice'
import { useEffect, useState } from 'react'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const [color,setColor]= useState('green');
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(count < 0){
      setColor('red')
    }else if(count > 0 ){
      setColor('green')
    }
    else{
      setColor('black')
    }
  })
  
  return (
    <div className='flex flex-col justify-between items-center border-2 rounded-3xl w-[30vw] h-[40vh] py-[5vh]'>
      <h1 style={{color:color}} className='text-[150px]'>{count}</h1>
      <div className=''>
        <div className='flex items-center gap-10'>
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
        </div>
      </div>
    </div>
  )
}

export default App