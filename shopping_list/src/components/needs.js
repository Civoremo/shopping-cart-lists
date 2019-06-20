import React from "react";

class NeedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="need-list-container">
                    <h3 className="list-title-text">Need</h3>
                    <div>
                        <p>item 2</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NeedList;
