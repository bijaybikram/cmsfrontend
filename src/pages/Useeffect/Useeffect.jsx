import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setcount] = useState(0)
    const increaseCount = ()=> {
        setcount((count)=> count+1)
    }
    useEffect(() => {
    //  alert("This will run on every render!")
    })
    useEffect(() => {
    //  alert("This will run on first render only!")
    }, [])
    

    useEffect(() => {
        if (count !==0){
            alert(" Count in changed!" + count)
        }
    }, [count])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Useeffect