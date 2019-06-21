import React from "react";
import "./App.css";

import NeedList from './components/need';
import FoundList from './components/found';
import NewItemInput from './components/newItemInput';

class App extends React.Component {
  state = {
    ourNeeds: ['apples', 'bRead', 'Butter', 'cereal', 'juice'],
    ourFinds: ['bananas', 'EGGS'],
    newItem: ''
    }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewItem = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      ourNeeds: [...this.state.ourNeeds, this.state.newItem],
      newItem: ''
    })
  }

  render () {
    
    return (
        <div className="App">
            <header>
                <h2>Shopping Cart List</h2>
            </header>

            <section>
              <NewItemInput newItem={this.state.newItem} handleChange={this.handleChange} addItem={this.addNewItem}/>
            </section>

            <section className="shopping-list-container">
              <NeedList ourNeeds={this.state.ourNeeds} />

              <FoundList ourFinds={this.state.ourFinds}/>
            </section>
        </div>
    );
  }
}

export default App;
