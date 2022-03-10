import React from 'react';
import './Toggle.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import Moon from './moon.png'
import Sun from './sun.png'

export default function Toggle() {
    const theme = useContext(ThemeContext);

    const handleToggleClick = (event) => {
        console.log(event)
        theme.dispatch({ type: "TOGGLE" })
    }
  return (
    <div className='toggle'>
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
        <button className='t-button' onClick={handleToggleClick} style={{left: theme.state.darkMode ? 0 : 25}}></button>
    </div>
  )
}
