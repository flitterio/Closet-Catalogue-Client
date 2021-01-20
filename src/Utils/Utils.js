import React from 'react'

export function Button({ className, ...props }) {
    return <button id="buttonstyle" className={['Button', className].join(' ')} {...props} />
  }

  export function Input({ className, ...props }) {
    return (
      <input className={['Input', className].join(' ')} {...props} />
    )
  }