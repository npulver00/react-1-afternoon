import React, {Component} from "react";

class FilterObject extends Component {
   constructor () {
       super ();
       this.state={
        instrument:[
            {
                type: "Piano",
                brand: "Steinway",
                color: "black",
            },
            { type: "Guitar",
                brand: "Ovation",
                color: "black",
            },
            {
                type: "Violin",
                brand: "Yamaha",
                color: "wood",
            }
            ],

        userInput:"",
        filterInstruments:[]
        }
        this.handleInput = this.handleInput.bind(this)
        this.filterInstruments = this.filterInstruments.bind(this)
       }
        
    handleInput = (event) => {
        console.log(event.target.value)
        this.setState=({
            userInput: event.target.value});
    }

   filterInstruments = (prop)=> {
       
     let instrument=this.state.instrument;
     let filterInstruments=[];
     console.log(prop)


          for(let i=0; i < instrument.length; i++){
          if(instrument[i].hasOwnProperty(prop)){
              filterInstruments.push(instrument[i]);
         }
         } console.log(filterInstruments)
     this.setState({filterInstruments:filterInstruments});

   }

    render(){
        console.log(this.state.userInput)
        return (
         <div className="puzzleBox filterObjectPB">
         <h4>Filter Object</h4>
         <span className="puzzleText" >Musical instruments:{(this.state.instrument, null, 10)}</span>
         <input className="inputLine" onChange={this.handleInput}></input>
         <button className="confirmationButton" onClick={() => this.filterInstruments(this.state.userInput)}>Hit me</button>
         <span className="resultsBox filterObjectRB"> Play on:{(this.state.filterInstruments, null, 10)}</span>
         
         </div>
        )
    }
}

export default FilterObject;
