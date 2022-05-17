import React from 'react'

export const MyBotton = ({children, ...props}) => {
  return (
      <button {...props} className="my__btn">
          {children}
    </button>
  )
}
