import React, {Component} from 'react'
import FetchUser from './services/api-helper'
import People from './components/Student'
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      data: '',
      input: ''
    }
  }

  componentDidMount = async () => {
   const data = await FetchUser()
    this.setState ({
       data
    })
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  
  render() {
    console.log(this.state.data)
    const info = this.state.data && this.state.data.students.map((student, index) => {
      return (
      <People
        key={index}
        image={student.pic}
        firstName={student.firstName}
        lastName={student.lastName}
        email={student.email}
        city={student.city}
        company={student.company}
        skill={student.skill}
        average={student.grades}
        />
    )
  })
  
  return (
    <div className="App">
      <SearchBar 
      input={''} 
      value='input'
      onChange={''}
      />
     {info}
    </div>
  );
}
}

export default App;
