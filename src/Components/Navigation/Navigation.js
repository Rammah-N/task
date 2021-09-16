import React from 'react'
import classes from './Navigation.module.scss';
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
const Navigation = () => {
  return (
    <div className={classes.Nav}>
      <Logo />
    </div>
  )
}

export default Navigation
