import React from "react";

const NewItemInput = props => {
    const { handleChange, addItem, newItem } = props;

    return (
        <div>
            <form onSubmit={addItem}>
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Add new item" 
                    name="newItem"
                    autoComplete="off"
                    value={newItem}
                />
                <button onClick={addItem}>Add item</button>
            </form>
        </div>
    );
};

export default NewItemInput;
