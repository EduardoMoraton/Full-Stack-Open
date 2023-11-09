import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'


  const content = [
    {name:'Fundamentals of React',exercise:10},
    {name:'Using props to pass data',exercise:7},
    {name:'State of a component',exercise:14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <p>Number of exercises {content.reduce((total,part)=>total+=part.exercise, 0)}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))