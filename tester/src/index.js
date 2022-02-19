import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDispaly from './SeasonDisplay';

class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     // this is the only time we do direct Assignment
    //     // this.state={lat:null, errMessage:""};
    // };
    state={lat:null ,errMessage:""};
    componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
                position=>this.setState({ lat :position.coords.latitude}),
                err=>this.setState({errMessage:err.message})
            );
        }
    render(){
        return <SeasonDispaly lat={this.state.lat}/>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));