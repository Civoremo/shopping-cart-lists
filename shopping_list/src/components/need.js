import React from "react";
import SingleItem from "./singleItem";

const NeedList = props => {
    const { items } = props;

    return (
        <div>
            <div className="need-list-container">
                <h3 className="list-title-text">Need</h3>
                <div>
                    {Object.keys(items).map( itemName => { 
                        if (items[itemName] === 0) {
                            return <SingleItem key={itemName} item={itemName} />
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default NeedList;
