import React,{use, useState} from 'react'
import Sample_Hook from './Sample_Hook'
import Card from './components/Card'


function App() {
    let myObj = {
        name:"Likhith Rao",
        age:21,
        city:"Mangalore"
    }
    
  return (
    <div className='flex gap-4 m-5'>
    {/* <Sample_Hook /> */}
    <Card name="Orange" obj={myObj}/>
    <Card name="Mango" />
 </div>
  )
}

export default App
