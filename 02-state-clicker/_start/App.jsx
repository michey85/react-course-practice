import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        );
    }
}

export default App;
