import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component{


    onInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label>Search Image</label>
                <input type='text' onChange={this.onInputChange} />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;