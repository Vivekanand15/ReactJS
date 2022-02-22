import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component{
    state={term:"hu"};

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return <div className="ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Search Image</label>
                <input type='text' value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;