import React from "react";
import SingleItem from "./singleItem";

const FoundList = props => {
  const { items } = props;

    return (
        <div>
            <div className="found-list-container">
                <h3 className="list-title-text">Found</h3>
                <div>
                    {Object.keys(items).map( itemName => { 
                        if (items[itemName] === 1) {
                            return <SingleItem key={itemName} item={itemName} />
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default FoundList;
