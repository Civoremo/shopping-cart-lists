import React from "react";
import SingleItem from "./singleItem";

const FoundList = props => {
  const { ourFinds } = props;

    return (
        <div>
            <div className="found-list-container">
                <h3 className="list-title-text">Found</h3>
                <div>
                    {ourFinds.map(foundItem => {
                      return <SingleItem key={foundItem} item={foundItem} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default FoundList;
