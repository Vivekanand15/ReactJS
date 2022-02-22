import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component{
    state={image:[]};
    onSearchSubmit=async (term)=>{
        const respons= await unsplash.get('/search/photos',{
        params:{query: term },   
    });

    this.setState({image:respons.data.results});
    }
    
    render(){
    return <div className='ui container' style={{marginTop:'10px'}}>
        <SearchBar  onSubmit={this.onSearchSubmit}/>
        Found: {this.state.image.length} image
        </div>
}
}
export default App;

