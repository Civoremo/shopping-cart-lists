import React from "react";

class FoundList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="found-list-container">
                    <h3 className="list-title-text">Found</h3>
                    <div>
                        <p>item 1</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoundList;
