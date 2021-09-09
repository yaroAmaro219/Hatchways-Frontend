import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import StudentList from './components/Student';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [studentListDefault, setStudentListDefault] = useState();
  const [studentList, setStudentList] = useState();

  const fetchData = async () => {
    return await fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => {
         setStudentList(data) 
         setStudentListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = studentListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setStudentList(filtered);
  }

  const info = this.state.setStudentList && this.state.setStudentList.students.map((student, index) => {
    return (
    <StudentList
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

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      {info}
      <StudentList studentList={studentList}/>
    </>
   );
}

export default SearchPage