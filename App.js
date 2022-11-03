import React, { useState } from 'react'

export const App = () => {
  const [value, setValue] = useState(15);
  const [color, setColor] = useState("cold")

  const valueUp=()=>{
    if (value===30) return;
      
    const newValue= value+1;
    if (newValue>=20) {
      setColor("hot")
    }
    setValue(newValue);
  };

  const valueDown=()=>{
    if (value===10) return;
    const newValue= value-1;
    if (newValue<20) {
      setColor("cold")
    }
    setValue(newValue);
  };
  return (
<>
    <div className='app-container1'>
      <h1 className='heading'>AC Remote</h1>
    </div>
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${color}`}>{value}°C </div>
      </div>
    <div className="button-container">
      <button onClick={()=>valueUp()} >+</button>
      <button onClick={()=>valueDown()} >-</button>
    </div>
    </div>
    </>
  )
}
