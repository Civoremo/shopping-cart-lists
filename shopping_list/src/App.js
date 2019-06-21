import React from "react";
import "./App.css";

import NeedList from "./components/need";
import FoundList from "./components/found";
import NewItemInput from "./components/newItemInput";

class App extends React.Component {
    state = {
        items: {
            apples: 0,
            bRead: 0,
            Butter: 0,
            cereal: 0,
            juiCe: 0,
            bananas: 1,
            EGGs: 1,
        },
        newItemText: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    addNewItem = e => {
        e.preventDefault();

        if (this.state.newItemText) {
            let duplicate = false;
            duplicate = this.duplicateCheck(this.state.newItemText, this.state.items, duplicate)

            if (duplicate) {
                alert("Item already in list!");
                this.setState({
                    ...this.state,
                    newItemText: "",
                });
            } else {
                this.setState(prevState => {
                    let temp = { ...prevState.items };
                    temp[this.state.newItemText] = 0;
                    prevState.newItemText = "";
                    return { items: temp };
                });
            }
        }
    };

    duplicateCheck = (newItem, list, isDuplicate) => {
        for (let item in list) {
            if (
                item.toLocaleLowerCase() ===
                newItem.toLocaleLowerCase()
            ) {
                return isDuplicate = true;
            }
        }
    }

    moveItem = item => {
        this.setState(prevState => {
            let temp = { ...prevState.items };
            if (temp[item] === 0) {
                temp[item] = 1;
            } else {
                temp[item] = 0;
            }
            return { items: temp };
        });
    };

    deleteItem = item => {
        this.setState(prevState => {
            let temp = { ...prevState.items };
            delete temp[item];
            return { items: temp };
        });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h2>Shopping Cart List</h2>
                </header>

                <section className="addNewItem-container">
                    <NewItemInput
                        newItemText={this.state.newItemText}
                        handleChange={this.handleChange}
                        addItem={this.addNewItem}
                    />
                </section>

                <section className="shopping-list-container">
                    <NeedList
                        items={this.state.items}
                        move={this.moveItem}
                        remove={this.deleteItem}
                    />
                    <FoundList
                        items={this.state.items}
                        move={this.moveItem}
                        remove={this.deleteItem}
                    />
                </section>
            </div>
        );
    }
}

export default App;
