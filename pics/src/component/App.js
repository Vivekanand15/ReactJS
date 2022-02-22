import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component{
    searchtThis(term){
        console.log(term);
    }
    render(){
    return <div className='ui container' style={{marginTop:'10px'}}><SearchBar  onSubmit={this.searchtThis} /></div>
}
}
export default App;