import React from "react";
import SingleItem from "./singleItem";

const NeedList = props => {
    const { ourNeeds } = props;

    return (
        <div>
            <div className="need-list-container">
                <h3 className="list-title-text">Need</h3>
                <div>
                    {ourNeeds.map( needItem => {
                        return <SingleItem key={needItem} item={needItem}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default NeedList;
