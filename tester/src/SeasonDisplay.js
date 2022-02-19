import React from "react";
import ReactDOM from "react";

const seasonConfig={
    summer:{
        text:"Let's hit the beach",
        iconName:"sun"
    },
    winter:{
        text:"Burr, it is chilly",
        iconName:"snowflake"
    }
}
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
    const {text,iconName}=seasonConfig[season];
    return <div>
        <i className={`${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />


    </div>
}

export default SeasonDispaly;