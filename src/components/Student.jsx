import React from 'react'

export default function People(props) {
  const grades = props.average
  const sum = grades.map(Number)
  const summ = sum.reduce((a, b) => a = a + b, 0)
  const average = (summ / sum.length)

  return (
    <div className="student-container">
      <div className="img">
      <img alt='student' src={props.image}/>
      </div>
      <div>
      <h1>{props.firstName} {props.lastName}</h1>
      <p>Email: {props.email} </p>
      <p>Company: {props.company}</p>
      <p>Skill: {props.skill}</p>
      <p>Average: {average}%</p>
      <input placeholder="add a tag"/>
      </div>
      <div>
        <button>+</button>
      </div>
    </div>
  )
}
