import React from 'react'

const Button = ({children, type, handler}) => {
    const style = type === 'danger' ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  return (
    <button onClick={handler} className={style}>
            {children}
          </button>
  )
}

export default Button