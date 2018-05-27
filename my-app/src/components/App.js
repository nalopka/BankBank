import React, { Component } from "react";
import "./App.css";

import ItemList from "./ItemList";
import ItemsContainer from "./ItemsContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ItemsContainer />
                <ItemList />
            </div>
        );
    }
}

export default App;
