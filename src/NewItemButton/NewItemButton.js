import React from 'react'
import './NewItemButton.css'

export default function NewItemButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NewItemButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NewItemButton.defaultProps ={
  tag: 'a',
}