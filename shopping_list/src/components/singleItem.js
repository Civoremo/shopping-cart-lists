import React from "react";

const SingleItem = props => {
    const { item } = props;

        return <div>
            <p>{item}</p>
        </div>;
}

export default SingleItem;
