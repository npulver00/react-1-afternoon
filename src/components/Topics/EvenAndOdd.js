import React, {Component} from "react";

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",


        }
        this.handleInput = this.handleInput.bind(this);
        this.handleArray= this.handleArray.bind(this);
    }

handleInput (event){
    this.setState({
        userInput: event.target.value
    })
}
handleArray(){
   let  newOddArray = [];
   let newEvenArray = [];
   let  newArray = (this.state.userInput).split(',');
    const  mappedArray = newArray.map((num) => {
       if (num%2===0){
           newEvenArray.push(parseInt(num) + ',')

       } else {
           newOddArray.push(parseInt(num) + ',')
       }
    })
    
    this.setState({
        evenArray: [newEvenArray],
        oddArray: [newOddArray],
    })


}



    render(){
        return (
            <div className = "puzzleBox evenAndOdd">
            <h4> Even And Odd </h4>
            <input className = "inputLine" onChange={this.handleInput}/>
            <button className = "confirmationButton" onClick={this.handleArray}> split </button>
            <span className = "resultsBox"> Evens: {this.state.evenArray} </span>
            <span className = "resultsBox"> Odds: {this.state.oddArray} </span>
            </div>
        )
    }
}


export default EvenAndOdd;