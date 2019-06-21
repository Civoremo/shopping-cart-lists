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
        newItem: "",
        duplicate: false,
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    addNewItem = e => {
        e.preventDefault();

        let duplicate = false;

        for (let item in this.state.items) {
            if (
                item.toLocaleLowerCase() === this.state.newItem.toLocaleLowerCase()
            ) {
                duplicate = true;
            }
        }

        if (duplicate) {
            alert("Item already in list!");
            this.setState({
                ...this.state,
                newItem: "",
            });
        } else {
            this.setState(prevState => {
                let temp = { ...prevState.items };
                temp[this.state.newItem] = 0;
                prevState.newItem = "";
                return { items: temp };
            });
        }
    };

    render() {
      
        return (
            <div className="App">
                <header>
                    <h2>Shopping Cart List</h2>
                </header>

                <section className="addNewItem-container">
                    <NewItemInput
                        newItem={this.state.newItem}
                        handleChange={this.handleChange}
                        addItem={this.addNewItem}
                    />
                </section>

                <section className="shopping-list-container">
                    <NeedList items={this.state.items} />
                    <FoundList items={this.state.items} />
                </section>
            </div>
        );
    }
}

export default App;
