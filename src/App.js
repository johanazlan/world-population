import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){ // Constructor for App. 
  super(props); 
  this.state = {
    value: null, // value is the user input in the text field. Initialize the initial state of value to ''.
    items: [], // items is the component which stores the API data. Initialize the initial state of items to []
    submitStatus: false // submitStatus is used to show the submit status. Initialize the initial state of submitStatus to false.
  }; 

  //.bind(this) function is used to pass this and maintain its value as the 
  // instance of the component within the function
  // This will allow setState to be called which updates the state value of value to event.target.value
  this.handleChange = this.handleChange.bind(this); // this.handleChange will call the handleChange function when there is a change in the text field.
  this.handleClickSubmit = this.handleClickSubmit.bind(this); // this.handleClickSubmit will call the handleClickSubmit function when submit is pressed.

  }

  // handleChange is an event handler which is called when there is a change in the user input. 
  // This function passes event as an argument
  handleChange(event) { 
    this.setState({value: event.target.value, // Sets state of component value to the new value and submitStatus to false. 
                   submitStatus: false }); 
  }

  // getApi() function is used to fetch the data from the rest countries API
  getApi(){
    fetch('https://restcountries.eu/rest/v2/all') // fetch() is used to fetch the rest countries API data.
      .then(response => response.json()) // Convert the data into a json format
      .then(json => { 
        this.setState({ // Set the state of items to the data which was fetched 
          items: json
        })
      })
    
  }

  // handleClickSubmit is an event handler which is triggered when the submit button is clicked.
  // This function passes an event as an argument
  handleClickSubmit(event) { 
    event.preventDefault() //to prevent page from refreshing once submit button is pressed. 
    this.getApi(); // Calls the getApi() function to fetch the data from rest countries API
    this.setState({submitStatus: true}) // Set the state of submit status to true once submit button is clicked. 
    
  }

  render() {
    const {items, submitStatus} = this.state; // Assign items and submitStatus to the current state. 

    return (
      // Assign this.handleClickSubmit to onSubmit so that the handleClickSubmit event handler will be triggered when
      // the submit button is clicked. Assign the current status of checkSubmit when the submit button is clicked. 
      // The <input> tag is used when there is an input in the text field. onChange is assigned to this.handleChange so that
      // the handleChange event handler will be called when there is a change in input. value updates its state to the input in
      // the text field after every change.

      <form onSubmit = {this.handleClickSubmit} checkSubmit = {this.state.submitStatus}> 
        <div className="inputData">
            Population more than: &nbsp; 
            <input type ="text" value = {this.state.value} onChange = {this.handleChange} /> 
        </div> 

        <div className="submitButton">
          <input className="submitButton" type = "submit" value = "Submit" /> 
        </div>
        
        <div className="outputData">
          Results: 

          {submitStatus &&
          <ul> 
            {items.filter((item) => (item.population > this.state.value)).map(item => (  // Filter the items so that only data with population greater than the input is present. The result is mapped into a new array by specifying numericalCodes as the key. 
              <li key = {item.numericalCodes}>                                            
                Country Name: {item.name}, Population: {item.population} 
              </li>
            ))}
          </ul>
          }
        </div>
      </form>
    );
  }

}

export default App;

