import React, { Component } from 'react';
import { Posts } from './components/Posts';

class App extends Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'Recat JS' },
        ],
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <Posts posts={posts} />
            </div>
        );
    }
}

export default App;
