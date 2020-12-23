import React from 'react';

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    componentDidMount() {
        const userCount = localStorage.getItem('count');
        if (userCount) this.setState({ count: +userCount });
    }

    componentDidUpdate() {
        localStorage.setItem('count', this.state.count);
    }

    handleReset = () => {
        this.setState({
            count: 0,
            isCounting: false,
        });
    };

    handleStart = () => {
        this.setState({
            isCounting: true,
        });
        this.counterId = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    };

    handleStop = () => {
        clearInterval(this.counterId);
        this.setState({
            isCounting: false,
        });
    };

    componentWillUnmount() {
        clearInterval(this.counterId);
        this.handleStop();
    }

    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
