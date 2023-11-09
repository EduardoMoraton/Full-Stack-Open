import React from 'react'
import ReactDOM from 'react-dom'
import Part from './Part'

const Content = ({content}) => {

  return (
     <div>
        {content.map(part=>(
            <Part name={part.name} exercise={part.exercise}></Part>
        ))}
     </div>
  )
}

export default Content