import React from 'react'

export default function EditUserButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['EditUserButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

EditUserButton.defaultProps ={
  tag: 'a',
}