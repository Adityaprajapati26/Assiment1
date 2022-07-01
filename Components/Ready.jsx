import React from 'react'
import Timer from '../Customhooks/Timer'
const Ready = () => {
    const ready=Timer()
  return (
    <div>
        <h3>Timeout</h3>
        <div>{ready? "Ready":"Notready"}</div>
    </div>
  )
}

export default Ready