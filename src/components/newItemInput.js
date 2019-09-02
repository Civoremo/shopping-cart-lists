import React from "react";

const NewItemInput = props => {
    const { handleChange, addItem, newItemText } = props;

    return (
        <div>
            <form onSubmit={addItem}>
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Add new item" 
                    name="newItemText"
                    autoComplete="off"
                    value={newItemText}
                />
                <button onClick={addItem}>Add item</button>
            </form>
        </div>
    );
};

export default NewItemInput;
