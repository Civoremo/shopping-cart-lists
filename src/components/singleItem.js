import React from "react";

const SingleItem = props => {
    const { item, move, remove } = props;

    return (
        <div className="single-item-container">
            <p className="item-content">{item}</p>
            <div className="item-button-container">
                <button onClick={() => move(item)}>Move</button>
                <button onClick={() => remove(item)}>Delete</button>
            </div>
        </div>
    );
};

export default SingleItem;
