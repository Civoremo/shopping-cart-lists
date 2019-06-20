import React from "react";
import "./App.css";

import NeedsList from './components/needs';
import FoundList from './components/found';
import NewItemInput from './components/newItemInput';

class App extends React.Component {
  state = {
    ourNeeds: ['apples', 'bRead', 'Butter', 'cereal', 'juice'],
    ourFinds: ['bananas', 'EGGS']
    }

  render () {

    return (
        <div className="App">
            <header>
                <h2>Shopping Cart List</h2>
            </header>

            <section>
              <NewItemInput />
            </section>

            <section className="shopping-list-container">
              <NeedsList />

              <FoundList />
            </section>
        </div>
    );
  }
}

export default App;
