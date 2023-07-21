import React from 'react'
import classes from './NoteFound.module.scss'

const NotFound = () => {
  return (
    <div className={classes.root}>
    <span className={classes.smile}>😕</span>
    <h2 className={classes.header}>Page not found</h2>
    <span className={classes.description}>Sorry, we can't found this page on our pizza-house :(</span>
    </div>
  )
}

export default NotFound