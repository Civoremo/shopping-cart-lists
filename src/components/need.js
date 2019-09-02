import React from "react";
import SingleItem from "./singleItem";

const NeedList = props => {
    const { items, move, remove } = props;

    return (
        <div>
            <div className="need-list-container">
                <h3 className="list-title-text">Need</h3>
                <div>
                    {Object.keys(items).filter(item => items[item] === 0).map(itemName => {
                        return <SingleItem key={itemName} item={itemName} move={move} remove={remove} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default NeedList;
