import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDispaly from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        // this is the only time we do direct Assignment
        this.state={lat:null, errMessage:""};

        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({ lat :position.coords.latitude});
            },
            err=>{
                this.setState({errMessage:err.message})
            }
        );
    }
    render(){
        if(this.state.lat && !this.state.errMessage){
            return <div>Latitude:{this.state.lat}</div>
        }
        if(!this.state.lat && this.state.errMessage){
            return <div>errMessage:{this.state.errMessage}</div>
        }
        return <div>"Loading.....!"</div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));