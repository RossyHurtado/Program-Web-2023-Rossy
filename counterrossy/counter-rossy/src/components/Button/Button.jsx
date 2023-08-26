import React from 'react'
import './button.css'

export function Button ({ toAdd, toReset, toSubstract }) {
  return (

    <>
      <div className='button-container'>
        <button type='button' className='button-style' onClick={toSubstract}>-</button>
        <button type='button' className='button-style2' onClick={toReset}>Reset</button>
        <button type='button' className='button-style' onClick={toAdd}>+</button>
      </div>

    </>
  )
}
