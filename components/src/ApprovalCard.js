import React from "react";
import ReactDOM from "react";

const ApproalCard=props=>{
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approved</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};
export default ApproalCard;