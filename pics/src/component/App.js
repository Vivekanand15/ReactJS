import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import SearchBar from './SearchBar';

class App extends React.Component{
    state={image:[]};
    onSearchSubmit=async (term)=>{
        const respons= await axios.get('https://api.unsplash.com/search/photos',{
        params:{query: term },
        headers:{
            Authorization:'Client-ID xA8AfT_Sc2rHfgLM65IvrUR1t7Y2wlKAcy5eVGwoSuY'
        }
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

