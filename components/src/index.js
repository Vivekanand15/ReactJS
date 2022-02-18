import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
// import faker from  'faker';
import ApproalCard from './ApprovalCard';

const App=()=>{
    return (
        <div className="ui container comments">
            <ApproalCard>
            <CommentDetail author="John" timeAgo="Time At 02:03PM" blog="this is very good"/>
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Julie" timeAgo="Time At 04:43PM" blog="wow"/>
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Angle" timeAgo="Time At 05:53PM" blog="awesom" />
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Sam" timeAgo="Time At 01:23PM" blog="wonderful" />
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Kathrina" timeAgo="Time At 12:13PM" blog="amazing" />
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Witson" timeAgo="Time At 02:53PM" blog="fire" />
            </ApproalCard>

            <ApproalCard>
            <CommentDetail author="Andrew" timeAgo="Time At 11:03PM" blog="love" />
            </ApproalCard>
    </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));