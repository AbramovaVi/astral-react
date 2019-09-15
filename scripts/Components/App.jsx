import React, { Component } from 'react';

import Counter from "./Counter.jsx";
import List from "./List.jsx";

class App extends Component {
    constructor() {
        super();

        this.state = {
            msg: 'amount of click',
            list: [{name:'todo something'}, {name:'redo smth'}, {name:'repeat'}],
            count: 0
        }
    }

    render() {
        const {msg} = this.state;
        const {list} = this.state;
        return (
            <>
                <h1>Counter</h1>
                <Counter msg={msg} count={this.state.count}/>
                <List list={list}/>
            </>
        )
    }
}

export default App;