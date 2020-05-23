import React from 'react';
import employees from "./employees.json";
import Card from "./components/Card";
import Nav from "./components/Navbar";
import Button from "./components/Button";
import './App.css';

class App extends React.Component {
  state = {
    name: ["Accounting", "Sales", "Administrative", "Corporate"],
    activeDepartment: "Select",
    employees: employees,
    sort: 'ascending'
  }

  search = () => {
    console.log("search")

    var filter = []
    for (let i=0; i<employees.length; i++) {
      if (this.state.activeDepartment === employees[i].department) {
        filter.push(employees[i])
      }
    }
    console.log(filter)
    this.setState({
      employees: filter
    })
    console.log(this.state)
  }

  handleChange = (e) => {
    console.log(e.target)
    console.log(e.value)

    this.setState({
      activeDepartment: e.target.value
    })
  }

  render() {
    const sorted = this.state.employees.sort ( (a, b) => {
      const isReversed = (this.state.sort === "ascending") ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name)
    })
    
    return (
      <div className="App">
        <Nav />
        <Button 
        department={this.state.name}
        search={this.search}
        selectDept={this.select}
        handleChange = {this.handleChange}
        activeDepartment = {this.state.activeDepartment}
        />
        <div className="container">
          <div className="row">
            {this.state.employees.map(employee => (
              <Card
                name={employee.name}
                occupation={employee.occupation}
                department={employee.department}
                location={employee.location}
              />
            ))}
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
