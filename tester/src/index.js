import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDispaly from './SeasonDisplay';
import Spinner from './Spinner';

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
        };
    renderContent=()=>{
        if(this.state.errMessage && !this.state.lat){
            return <div>Error:{this.state.errMessage}</div>;
        }
        if(!this.state.errMessage && this.state.lat){
            return <SeasonDispaly lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept the Location request"/>;
    }
    render(){
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));