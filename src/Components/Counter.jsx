import React ,{ useState,useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        
        if (count>0){
            document.title=`Chats (${count})`

        }else{
            document.title=`Chats`

        }

    });
  return (
    <>
    <div className="counter">
            <h1 >CounterApp</h1>
            <div>
                <h1 className='label'>{count}</h1>
                <div className='buttons'>
                <button className='button' onClick={()=>setCount(count+1)}>Increment</button>
                <button className='button' onClick={()=>setCount(count-1)}>Decrement</button>
            </div>
            </div>
            </div>
    
    </>
  )
}

export default Counter;