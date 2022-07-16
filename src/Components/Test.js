import React from 'react'

const Test = () => {
    
 
    
    const [name, setname] = React.useState("prashant");
    const [number, setnumber] = React.useState("123456");
  return (
    <div>
        <input type="text" name="name"  value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="number" name="number" placeholder="number" value={number} onChange={(e)=>setnumber(e.target.value)} />

    </div>
  )
}

export default Test