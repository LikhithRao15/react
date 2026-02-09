import React,{use, useState} from 'react'


function App() {
    const [value,setvalue]=useState(0)
    

    const addValue = () => {
        if(value>=20){
            alert("value cannot be more than 20")
            return
        }
        setvalue(value+1)
        console.log(value)
    }

    const removeValue = () => {
        if(value<=0){
            alert("value cannot be less than 0")
            return
        }
        setvalue(value-1)
        console.log(value)
    }
  return (
    <>
    <h3>the value :{value}</h3>
    <button onClick={addValue}>ADD</button><br />
    <button onClick={removeValue}>REMOVE</button>
  </>
  )
}

export default App
