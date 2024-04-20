import React from 'react'

function Button({
    children,
    bgColor='bg-blue-100',
    textColor='text-white',
    type='button',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${className} ${type} ${textColor}`}{...props}>{children}</button>
  )
}

export default Button