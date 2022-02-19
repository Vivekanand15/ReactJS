import React from "react";
import ReactDOM from "react";


const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0?'summer':'winter';
    }
    else{
        return lat>0?'winter':'summer';
    }
}

const SeasonDispaly=(props)=>{
    const season=getSeason(props.lat,new Date().getTime());
    
    return <div><h1>{season==='winter'? 'Burr, it is chilly':'Lets hit the beach'}</h1></div>
}

export default SeasonDispaly;