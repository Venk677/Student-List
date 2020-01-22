import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class StudentList extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
        students : [
                // {
                //   'firstName': 'Pramod',
                //   'lastName': 'Ray',
                //   'skills': ['Python','HTML','CSS']
                // },
                // {
                //   'firstName': 'Sachin',
                //   'lastName': 'Suresh',
                //   'skills': ['Python', 'HTML', 'CSS', 'CAT']
                // },
                // {
                //   'firstName': 'Samarth',
                //   'lastName': 'Hegde',
                //   'skills': ['Python', 'Git', 'CSS']
                // }
              ]
    }
    this.updateStudents = this.updateStudents.bind(this);
    this.deleteStudents = this.deleteStudents.bind(this);
    this.sortFirstName=this.sortFirstName.bind(this);
    this.sortLastName=this.sortLastName.bind(this);
    this.sortSkills=this.sortSkills.bind(this);
    this.componentList=this.componentList.bind(this);
  }

  componentList() {
    axios.get('http://127.0.0.1:8000/studentlist')
      .then(res => {
        console.log(res);
        this.setState({students:res.data});
    });
    console.log("get",this.state.students);
  }


  componentDidMount(){
    this.componentList();
  }

  deleteStudents(students){
    console.log(this.key);
    axios.delete(`http://127.0.0.1:8000/student/delete/${this.state.pk}`)
    .then(res => 
      {this.componentList()}
    );
  }

  updateStudents(students) {
    let obj = this;
    axios.post('http://127.0.0.1:8000/studentlist/post',students)
    .then(res =>
       {obj.componentList()})
    console.log(students);
    
  }
  
  sortLastName(){
    let x= this.state.students;
    x.sort(function(a,b) {return ((a.lastName.toLowerCase()<b.lastName.toLowerCase())?(-1):(1))});
    this.setState({
      students : x
    })
  }

  sortFirstName(){
    let y= this.state.students;
    y.sort(function(a,b) {return ((a.firstName.toLowerCase()<b.firstName.toLowerCase())?(-1):(1))});
    this.setState({
      students : y
    })
  }

  sortSkills(){
    let z=this.state.students;
    z.sort(function(a,b) {return ((a.skills_array.length<b.skills_array.length)?(1):(-1))});
    this.setState({
      students : z
    })
  }


  render() {
    return (
      <div>
      <StudentInfo updateStudent={this.updateStudents}/>
      <table >
        <thead>
          <tr>
            <th onClick={this.sortFirstName}> First Name </th>
            <th onClick={this.sortLastName}> Last Name </th>
            <th onClick={this.sortSkills}> Skills:</th>
          </tr>
          </thead>
          <tbody>
          {
            (this.state.students)
            .filter((name) => {
              return name.firstName.toLowerCase().includes(this.state.query.toLowerCase())||
              name.lastName.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .map((item,index) =>
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                { 
                  item.skills_array.map((newitem,newindex) =>
                  <ul key={newindex} type='square'>
                    <li>{newitem}</li>
                  </ul>
                  )}
                </td>
                <button onClick={this.deleteStudents}>Delete</button>
              </tr>
             
          )}
          </tbody>
        </table>
        <input type="text" onChange={(event) => this.setState({query:event.target.value})}/>
      </div>
      
    )
  }
}
class StudentInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName: "",
      lastName: "",
      skills: "",
    }
    this.addData=this.addData.bind(this);
    // this.updateSkillState = this.updateSkillState.bind(this);
  } 

  addData(){
    let temp = {
      "firstName" : this.state.firstName,
      "lastName" : this.state.lastName,
      "skills" : this.state.skills,
    }
    console.log(temp);
    this.props.updateStudent(temp);
    }

  // updateSkillState() {
  //   let string = this.state.skills;
  //   let array = string.split(',');
  //   return array;
  // }

  render() {
    return (
      <div>
      <input type="text" onChange={(event) => this.setState({ firstName : event.target.value})}/>
      <input type="text" onChange={(event) => this.setState({ lastName : event.target.value})}/>
      <input type="text" onChange={(event) => this.setState({ skills: event.target.value})}/>
      <button onClick={this.addData}>Add</button>
      </div>


    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <StudentList/>
      </div>
    );
  }
}

export default App;
