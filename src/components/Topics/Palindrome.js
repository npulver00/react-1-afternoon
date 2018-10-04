import React, {Component} from "react";

class Palindrome extends Component {

    constructor(){
        super();
        this.state={
        userInput: "",
        palindrome:""
        };
        }
    
    handleChange(event){
        this.setState({userInput:event});
    }
    isPalindrome(userInput){
        var forwards= userInput;
        var backwards=userInput;
        backwards = backwards.split("");
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards){
            this.setState({palindrome:"true"});
        } else{
            this.setState({palindrome: "false"});
        }
    }

    render(){
        return (
            <div className= "puzzleBox palindromePB">
            <div> Palindrome </div>
            <input className = "inputLine" onChange={(event)=> this.handleChange(event.target.value)}></input>
            <button className = "confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}> Checkword </button>
            <span className= "resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;