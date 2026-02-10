import React,{useState} from 'react'

function Sample_Hook() {
    
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
    <div>
<h3>the value :{value}</h3>
    <button onClick={addValue}>ADD</button><br />
    <button onClick={removeValue}>REMOVE</button>
    </div>
  )
}

export default Sample_Hook
