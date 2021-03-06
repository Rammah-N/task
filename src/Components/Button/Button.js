import React from 'react'
import classes from './Button.module.scss'
const Button = ({text, type, onClick}) => {
  return (
    <button  className={classes.PrimaryButton} type={type}>{text}</button>
  )
}

export default Button
