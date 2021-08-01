// import React from 'react';
// import { useState, useEffect } from 'react';
// import './App.css'

// function App2(){
//     const [error, setError] = useState(null); //Initial state for error. setError is used to update the state
//     const [items, setItems] = useState([]); //Initial state for items. setItems is used to update the state
//     const [value, setValue] = useState(""); //Initial state for value. setValue is used to update the state
//     const [searchParam] = useState(["population"]) //Set parameters to only search countries by population
//     // this.handleClickSubmit = this.handleClickSubmit.bind(this);


//     useEffect(() => {
//         fetch('https://restcountries.eu/rest/v2/all') //Fetch the data from API
//         .then(response => response.json()) //pass a response and convert the data to json format.
//         .then(json => { //Pass json to setItems().
//             setItems(json); //Set the state of items to the API data in json format. 
//         },

//         //handle errors
//         (error) => {
//           setError(error);
//         }
//         );
//     }, []); // [] ensures that useEffect will run one time. 

//     const handleClickSubmit = (e,items) => {
//         const {name, population} = items;
//         e.preventDefault();
//         items = items.filter(item => {
//             return item[population] < value
//         })
//     }

//     function search(items){
//         return items.filter(item => 
//             {return item[searchParam] < value});
//             // if (searchParam > value){
//             // return searchParam.some(newItem => {
//             //     return (
//             //         item[newItem] > value
//             //     );
//             // });
            
        
//     }
//     console.log(items)

//     if (error) {
//         return <>{error.message}</>
//     }

//     else {
//         return (
//             //Add the event handler to onSubmit var.
//             <div>
//             <form onSubmit = {handleClickSubmit}> 
//             <div className="inputData">
//                 Population more than: &nbsp; 
//                 <input type ="text" value = {value} onChange = {(e) => setValue(e.target.value)} />
//             </div>

//             <div className="submitButton">
//             <input className="submitButton" type = "submit" value = "Submit" /> 
//             </div>
            
//             <div className="outputData">
//                 Results: 
//             </div>
            
//             <ul>
//                 {items.map(item => (
//                 <li key = {item.callingCodes}>
//                     Country Name: {item.name}, Population: {item.population}
//                 </li>
//                 ))}
//             </ul> 
//             </form>
//             </div>
//         );
        

//     }

// }

// export default App2;
