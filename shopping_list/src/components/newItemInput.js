import React from "react";

class NewItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <input placeholder="Add new item" />
            </div>
        );
    }
}

export default NewItemInput;
